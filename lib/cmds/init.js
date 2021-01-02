"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = void 0;
const hueClient_1 = __importDefault(require("../hueClient"));
const repository_1 = require("../repository");
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
    async handler(argv) {
        const data = await hueClient_1.default.post('/api', {
            devicetype: argv.user,
        });
        const { username } = data[0].success;
        repository_1.write({
            username,
        });
        console.log(`Initialization succeeded! username: ${username}`);
    },
};
