"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenesCommand = void 0;
const hueClient_1 = __importDefault(require("../hueClient"));
const repository_1 = require("../repository");
exports.scenesCommand = {
    command: 'scenes',
    describe: 'get scenes data',
    builder: {},
    handler() {
        (async () => {
            const username = repository_1.read('username');
            const data = await hueClient_1.default.get(`/api/${username}/scenes`);
            console.log(data);
        })();
    },
};
