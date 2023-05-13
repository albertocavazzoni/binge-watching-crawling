import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export default yargs(hideBin(process.argv))
    .scriptName('binge-watching-crawling')
    .usage('$0 \n', 'node index.js [options]')
    .version('1.0.0')
    .locale('it')
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
    })
    .example([
        ['node index.js --ids=2', '-> Crawla la serie TV con id === 2'],
        ['node index.js --catalog', '-> Crawla il catalogo delle serie TV'],
    ])
    .help()
    .parse();
