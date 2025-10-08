import { Octokit } from '@octokit/rest';

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

const owner = 'MarineGift';
const repo = 'graces-catering';

async function verifyFile() {
  try {
    // Get index.html from GitHub
    console.log('📥 Fetching index.html from GitHub...');
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: 'index.html',
      ref: 'main'
    });
    
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    
    // Check for menu section
    const hasMenu = content.includes('Our Premium Menu');
    const hasMenuNav = content.includes('href="#menu"');
    const hasMenuSection = content.includes('id="menu"');
    const hasMenuItems = content.includes('menu-item');
    
    console.log('\n📊 Verification Results:');
    console.log('✅ File size:', content.length, 'bytes');
    console.log(hasMenu ? '✅' : '❌', 'Contains "Our Premium Menu":', hasMenu);
    console.log(hasMenuNav ? '✅' : '❌', 'Has menu navigation link:', hasMenuNav);
    console.log(hasMenuSection ? '✅' : '❌', 'Has menu section ID:', hasMenuSection);
    console.log(hasMenuItems ? '✅' : '❌', 'Contains menu items:', hasMenuItems);
    
    if (hasMenu) {
      const menuMatches = content.match(/Our Premium Menu/g);
      console.log('📝 Found', menuMatches.length, 'occurrences');
    }
    
    // Count nav links
    const navMatches = content.match(/nav-link/g);
    if (navMatches) {
      console.log('🔗 Nav links found:', navMatches.length);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyFile();
