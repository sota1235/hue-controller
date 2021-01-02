import { CommandModule } from 'yargs';

type Options = {
  user: string;
};

export const initCommand: CommandModule<Record<string, any>, Options> = {
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
