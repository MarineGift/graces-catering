import { Octokit } from '@octokit/rest';
import { readFileSync } from 'fs';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const owner = 'MarineGift';
const repo = 'graces-catering';
const path = 'docs/index.html';

async function uploadFix() {
  try {
    const content = readFileSync('docs/index.html');
    const base64Content = content.toString('base64');
    
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
      message: 'Fix menu filtering: change display block to empty string for grid compatibility',
      content: base64Content,
      branch: 'main',
      sha: currentFile.sha
    });
    
    console.log('✅ Menu filtering fix uploaded!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

uploadFix();
