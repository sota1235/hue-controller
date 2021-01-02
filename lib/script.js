"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const init_1 = require("./cmds/init");
const work_1 = require("./cmds/work");
yargs_1.default(process.argv.slice(2))
    .command(init_1.initCommand)
    .command(work_1.workCommand)
    .demandCommand()
    .help().argv;
