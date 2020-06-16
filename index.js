#!/usr/bin/env node
const yargs = require('yargs');
const version = require('./package.json').version;

(async () => {

    // run before all commands (ex. Environment reset: check prereqs, permissions, required files)
    // if (condition) {
    //     do something
    // }

    yargs
        // .middleware(check)
        .commandDir('./lib/commands')
        .version(version)
        .demandCommand(1, 'Did you forget to specify a command?')
        .recommendCommands()
        .showHelpOnFail(true, 'Specify --help for available options')
        .strict(true)
        .help()
        .wrap(yargs.terminalWidth())
        .argv
})();
