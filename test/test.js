const execSync = require('child_process').execSync;

describe('Run start command', () => {

    // setup prereqs ...
    beforeAll(() => {
        // do something
    })

    // tear down ...
    afterAll(() => {
        // do something
    });

    test('Running `$ cli-template start a b --force`', () => {
        const output = execSync('node index.js start a b --force').toString().trim();
        expect(output).toBe(`{ foo: 'a', bar: 'b', force: true }`);
    });
})
