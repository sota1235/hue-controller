"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const init_1 = require("./cmds/init");
const work_1 = require("./cmds/work");
const enjoy_1 = require("./cmds/enjoy");
const scenes_1 = require("./cmds/scenes");
yargs_1.default(process.argv.slice(2))
    .command(init_1.initCommand)
    .command(work_1.workCommand)
    .command(enjoy_1.enjoyCommand)
    .command(scenes_1.scenesCommand)
    .demandCommand()
    .help().argv;
