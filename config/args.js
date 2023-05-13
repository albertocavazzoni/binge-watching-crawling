import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export default yargs(hideBin(process.argv))
    .scriptName('binge-watching-crawling')
    .usage('$0', 'node index.js [options]')
    .version('1.0.0')
    .locale('en')
    .options({
        ids: {
            requireArg: true,
            type: 'string',
            describe: 'Serie TV ids',
        },
        glues: {
            requireArg: true,
            type: 'string',
            describe: 'Serie TV glues',
        },
        catalog: {
            type: 'boolean',
            describe: 'Crawla il catalogo delle serie TV',
        },
        crawl: {
            type: 'boolean',
            describe: 'Crawla tutte le pagina delle serie TV',
        },
    })
    .conflicts({ ids: ['glues', 'catalog', 'crawl'], glues: ['catalog', 'crawl'], catalog: ['crawl'] })
    .example([
        ['node index.js --ids=2', '-> Crawla la serie TV con id === 2'],
        ['node index.js --catalog', '-> Crawla il catalogo delle serie TV'],
    ])
    .strict()
    .help()
    .parse();
