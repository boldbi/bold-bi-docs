const gulp = require('gulp');
const { writeFileSync } = require('fs');

gulp.task('sitemap', done => {
    debugger;
    let dateInstance = new Date();

    let lastModified = `${dateInstance.getFullYear()}-${('0' + (dateInstance.getMonth() + 1)).slice(-2)}-${("0" + dateInstance.getDate()).slice(-2)}`;
    let baseUrl = 'https://help.boldbi.com';
    let routerData = require('./../left-toc.json').routerData;
    let paths = Object.keys(routerData);
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>

    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    \n`;
    paths.forEach((path) => {
        xmlContent += `        <url>

        <loc>${baseUrl + path}</loc>
  
        <lastmod>${lastModified}</lastmod>
  
    </url>\n`;
    });
    xmlContent += `</urlset>`;
    writeFileSync('./sitemap-help.xml', xmlContent, 'utf8');
    done();
});