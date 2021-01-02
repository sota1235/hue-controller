"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = void 0;
exports.initCommand = {
    command: 'init',
    describe: 'initialization',
    builder: {
        user: {
            describe: 'device name will be used to create user',
            default: 'hue-cli',
            alias: 'u',
            type: 'string',
        },
    },
    handler(argv) {
        console.log(argv);
    },
};
