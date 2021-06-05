require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

// build(URL) e save(DESTINO DO FICHEIRO XML)
function generateSitemap() {
  return new Sitemap(router).build('https://explore-alcanena-d5727.web.app/').save('./public/sitemap.xml');
}

generateSitemap();
