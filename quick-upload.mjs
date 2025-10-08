import { Octokit } from '@octokit/rest';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const GITHUB_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
const REPO_OWNER = 'MarineGift';
const REPO_NAME = 'graces-catering';
const BRANCH = 'main';

if (!GITHUB_TOKEN) {
  console.error('❌ Error: GITHUB_TOKEN environment variable is not set.');
  process.exit(1);
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

async function uploadFile(filePath, content) {
  try {
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: filePath,
        ref: BRANCH
      });
      sha = data.sha;
      console.log(`  ℹ️  File exists, updating...`);
    } catch (error) {
      console.log(`  ℹ️  Creating new file...`);
    }

    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: filePath,
      message: `Update ${filePath}`,
      content: content,
      branch: BRANCH,
      sha: sha
    });

    console.log(`  ✅ Success: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error uploading ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Quick upload starting...\n');

  const filesToUpload = [
    'docs/index.html',
    'docs/assets/images/kitchen-service.jpg',
    'docs/assets/images/menu/korean-specialties/galbi.jpg',
    'docs/assets/images/menu/korean-specialties/bulgogi.png',
    'docs/assets/images/menu/korean-specialties/korean-style-chicken.jpg',
    'docs/assets/images/services/delivery.jpg'
  ];

  let successCount = 0;
  let failCount = 0;

  for (const file of filesToUpload) {
    console.log(`📤 Uploading: ${file}`);
    const content = readFileSync(file).toString('base64');
    const success = await uploadFile(file, content);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n✨ Upload complete!`);
  console.log(`✅ Successfully uploaded: ${successCount} files`);
  if (failCount > 0) {
    console.log(`❌ Failed to upload: ${failCount} files`);
  }
}

main();
