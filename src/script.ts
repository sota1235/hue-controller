import yargs from 'yargs';
import { initCommand } from './cmds/init';
import { workCommand } from './cmds/work';

yargs(process.argv.slice(2))
  .command(initCommand)
  .command(workCommand)
  .demandCommand()
  .help().argv;
