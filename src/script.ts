import yargs from 'yargs';
import { initCommand } from './cmds/init';
import { workCommand } from './cmds/work';
import { enjoyCommand } from './cmds/enjoy';

yargs(process.argv.slice(2))
  .command(initCommand)
  .command(workCommand)
  .command(enjoyCommand)
  .demandCommand()
  .help().argv;
