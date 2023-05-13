import args from './config/args.js';
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

console.log(args);

async function scrape() {
    const response = await gotScraping('https://www.comingsoon.it/serietv/ricerca/');

    const $ = cheerio.load(response.body);

    const series = [];

    $('.cards.serie-tv').each((i, el) => {
        const title = $(el).find('.titolo').text().trim();
        const country = $(el).find('.meta .p-small:contains("Nazionalità") span').text().trim();
        const genre = $(el).find('.meta .p-small:contains("Genere") span').text().trim();
        const year = $(el).find('.meta .p-small:contains("Anno") span').text().trim();
        series.push({ title, country, genre, year });
    });

    console.table(series);
}

scrape();
