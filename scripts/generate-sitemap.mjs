import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const DOMAIN = 'https://multimarkt.ovny.net';
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Listado de rutas estáticas
const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'comparativa-digi', priority: '0.9', changefreq: 'monthly' },
  { path: 'glosario', priority: '0.7', changefreq: 'monthly' },
  { path: 'politica-privacidad', priority: '0.3', changefreq: 'yearly' },
  { path: 'aviso-legal', priority: '0.3', changefreq: 'yearly' },
  { path: 'cookies', priority: '0.3', changefreq: 'yearly' },
];

// Slugs de los posts del blog (extraídos de blog.service.ts)
const blogSlugs = [
  'starlink-espana-alternativa-apagones-red',
  'ia-ahorro-energetico-realidad-marketing-2026',
  'impacto-conflictos-globales-factura-luz-fibra',
  'ciberseguridad-hogar-protege-wifi-nuevos-ataques',
  'fin-del-cobre-abril-2026-que-hacer',
  'que-hacer-cuando-falla-digi-guia-completa',
  'vodafone-factura-inflada-trucos-ahorro',
  'o2-versus-multimarkt-fibra-sencilla',
  'lowi-mejor-red-mismo-precio',
  'aproob-operadoras-locales-merecen-la-pena',
  'redi-atencion-al-cliente-comparativa',
  'avatel-fibra-rural-alternativas',
  'orange-packs-ahorro-o-exceso',
  'movistar-premium-calidad-sin-sobrecoste',
  'ventajas-ahorro-energia-2026'
];

function generateSitemap() {
  console.log('🚀 Generando sitemap.xml...');
  
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Añadir rutas estáticas
  staticRoutes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Añadir posts del blog
  blogSlugs.forEach(slug => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  try {
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }
    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`✅ Sitemap generado con éxito en: ${SITEMAP_PATH}`);
    console.log(`📊 Total URLs: ${staticRoutes.length + blogSlugs.length}`);
  } catch (error) {
    console.error('❌ Error al generar el sitemap:', error);
  }
}

generateSitemap();
