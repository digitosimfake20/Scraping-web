import { scrapingscraping } from './scrap.js';

async function vedefe() {
  console.log('run');
  try {
    const results = await scrapingscraping('Putin'); // Nội dung muốn scrap
    console.log('a:');
    results.forEach(source => {
      console.log(`${source.source}: ${source.articles.length} bao`);
      source.articles.forEach(article => {
        console.log(`  - ${article.title}`);
        console.log(`    URL: ${article.url}`);
      });
    });
  } catch (error) {
    console.error('loi:', error);
  }
}

vedefe();
