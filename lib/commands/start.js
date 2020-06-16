// you *have to* specify <foo>
// you *can* specify [bar]
exports.command = 'start <foo> [bar]';
exports.desc = 'This is the start command';

exports.builder = yargs => {

    // valid option keys: https://yargs.js.org/docs/#api-optionskey-opt
    yargs.options({
        force: {
            alias: ['f', 'ff'], // or just 'a' if only one
            describe: 'Description for force options',
            default: false,
            type: 'boolean',
            // demand: true
        },
    });

    yargs
        .example(`$0 start foo`, `This is an example of how to use this command`)
        .example(`$0 start foo bar`, `This is another example of how to use this command`);
};

exports.handler = async argv => {
    const { foo, bar, force } = argv;

    console.log({foo, bar, force});
};
