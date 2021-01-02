import yargs from 'yargs';
import { initCommand } from './cmds/init';

yargs(process.argv.slice(2)).command(initCommand).demandCommand().help().argv;
