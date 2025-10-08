import { Octokit } from '@octokit/rest';
import { readFileSync } from 'fs';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const owner = 'MarineGift';
const repo = 'graces-catering';
const path = 'docs/index.html';

async function uploadIndex() {
  try {
    console.log('📥 Reading local docs/index.html...');
    const content = readFileSync('docs/index.html');
    const base64Content = content.toString('base64');
    
    console.log('  Size:', content.length, 'bytes');
    console.log('  Contains menu:', content.includes('Our Premium Menu') ? 'YES ✅' : 'NO ❌');
    
    // Get current file SHA
    console.log('\n📤 Getting current file SHA...');
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path,
      ref: 'main'
    });
    
    console.log('  Current SHA:', currentFile.sha.substring(0, 7));
    
    // Update file
    console.log('\n⬆️  Uploading new version...');
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'Update index.html with menu section - FORCE UPDATE',
      content: base64Content,
      branch: 'main',
      sha: currentFile.sha
    });
    
    console.log('✅ Upload complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

uploadIndex();
