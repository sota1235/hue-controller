"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enjoyCommand = void 0;
const hueClient_1 = __importDefault(require("../hueClient"));
const repository_1 = require("../repository");
exports.enjoyCommand = {
    command: 'enjoy',
    describe: 'change mode for private time',
    builder: {},
    handler() {
        (async () => {
            const username = repository_1.read('username');
            await hueClient_1.default.put(`/api/${username}/groups/2/action`, {
                scene: 'Ur0ChCrOcgefG06',
            });
            console.log(`Time to enjoy your time☕️`);
        })();
    },
};
