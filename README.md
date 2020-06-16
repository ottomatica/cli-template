# cli-template 🥣 | ![CI](https://github.com/ottomatica/cli-template/workflows/CI/badge.svg)

This repo contains a minimalistic Node.js cli app biolerplate to quickly get started with creating your next cli app ✨

## Get Started

- Clone this repository:

  ```bash
  git clone https://github.com/ottomatica/cli-template.git
  cd cli-template
  npm link
  ```

- Try running a command:

  ```bash
  cli-template start a b --force
  ```

## Define Commands

Commands are define in [`./lib/commands/*.js`](./lib/commands). This template includes a simple command called [start](./lib/commands/start.js) (the same command you tried above ☝️) which you can use as a template for your next commands. Simply make a copy of start.js file and update properties of the command:

```js
exports.command = 'start <foo> [bar]';          // <--- This is where you define the command name and args
                                                //        <foo> is a required, and [bar] is optional

exports.desc = 'This is the start command';     // <--- The command description shown when you run `--help`

exports.builder = yargs => {
    yargs.options({                             // <--- Add as many options you need here
        force: {
            alias: ['f', 'ff'],
            describe: 'Description for force options',
            default: false,
            type: 'boolean'
        },
    });
                                                // <--- optionally add an example to `--help` command
    yargs.example(`$0 start foo`, `Example of how to use this command`);
};

exports.handler = async argv => {
    const { foo, bar, force } = argv;           // <--- In this command handler you can get the cli args and 
                                                //        use them to implement the command actions

    console.log({foo, bar, force});
};
```

> _Note: the command name is what you specify in `exports.command` property of the file, not the name of the file you create._

Since we are using [Yargs](https://www.npmjs.com/package/yargs) for creating these commands, by setting the properties mentioned above, we will also get a nice `--help` command automatically:

```bash
$ cli-template start --help

cli-template start <foo> [bar]

This is the start command

Options:
  --version          Show version number                                           [boolean]
  --help             Show help                                                     [boolean]
  --force, -f, --ff  Description for force options                [boolean] [default: false]

Examples:
  cli-template start foo      Example of how to use this command
```

## Testing

This template also includes basic setup for your integration tests. You can find an example of running this `cli-template` app in [`./test/test.js`](./test/test.js).

```bash
$ npm test

PASS  test/test.js
  Run start command
    ✓ Running `$ cli-template start a b --force` (80 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.948 s, estimated 1 s
Ran all test suites.
```
