import { Octokit } from '@octokit/rest';
import { readFileSync } from 'fs';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const owner = 'MarineGift';
const repo = 'graces-catering';
const path = 'docs/index.html';

async function uploadUpdate() {
  try {
    console.log('📥 Reading updated docs/index.html...');
    const content = readFileSync('docs/index.html');
    const base64Content = content.toString('base64');
    
    console.log('  Size:', content.length, 'bytes');
    console.log('  Menu categories:', content.includes('MEAT') && content.includes('SEAFOOD') ? 'YES ✅' : 'NO ❌');
    console.log('  Logo hover:', content.includes('.logo:hover') ? 'YES ✅' : 'NO ❌');
    
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path,
      ref: 'main'
    });
    
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'Update menu with 4 new categories (MEAT, SEAFOOD, VEGETABLE/RICE/DUMPLINGS, SALAD) and add logo hover effect',
      content: base64Content,
      branch: 'main',
      sha: currentFile.sha
    });
    
    console.log('✅ Upload complete!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

uploadUpdate();
