import { Octokit } from '@octokit/rest';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const owner = 'MarineGift';
const repo = 'graces-catering';
const branch = 'main';

// GitHub Personal Access Token from environment
const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;

if (!token) {
  console.error('❌ GITHUB_PERSONAL_ACCESS_TOKEN or GITHUB_TOKEN environment variable is required');
  process.exit(1);
}

const octokit = new Octokit({ auth: token });

// Function to get all files recursively
function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to upload a file to GitHub
async function uploadFile(filePath) {
  try {
    const content = readFileSync(filePath);
    const base64Content = content.toString('base64');
    // Keep the docs/ prefix for GitHub
    const githubPath = filePath;
    
    console.log(`📤 Uploading: ${githubPath}`);
    
    // Check if file exists
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: githubPath,
        ref: branch
      });
      sha = data.sha;
      console.log(`  ℹ️  File exists, updating...`);
    } catch (error) {
      console.log(`  ℹ️  Creating new file...`);
    }
    
    // Create or update file
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: githubPath,
      message: `Update ${githubPath} - Add menu section with food images`,
      content: base64Content,
      branch,
      ...(sha && { sha })
    });
    
    console.log(`  ✅ Success: ${githubPath}`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error uploading ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting GitHub upload...');
  console.log(`📦 Repository: ${owner}/${repo}`);
  console.log(`🌿 Branch: ${branch}`);
  console.log('');
  
  // Get all files from docs directory
  const docsPath = 'docs';
  const allFiles = getAllFiles(docsPath);
  
  console.log(`📁 Found ${allFiles.length} files to upload`);
  console.log('');
  
  let successCount = 0;
  let errorCount = 0;
  
  // Upload files one by one (to avoid rate limiting)
  for (const file of allFiles) {
    const success = await uploadFile(file);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('');
  console.log('📊 Upload Summary:');
  console.log(`  ✅ Successful: ${successCount}`);
  console.log(`  ❌ Failed: ${errorCount}`);
  console.log(`  📝 Total: ${allFiles.length}`);
  console.log('');
  console.log('🎉 GitHub upload complete!');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
