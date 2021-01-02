import yargs from 'yargs';
import { initCommand } from './cmds/init';
import { workCommand } from './cmds/work';
import { enjoyCommand } from './cmds/enjoy';
import { scenesCommand } from './cmds/scenes';

yargs(process.argv.slice(2))
  .command(initCommand)
  .command(workCommand)
  .command(enjoyCommand)
  .command(scenesCommand)
  .demandCommand()
  .help().argv;
