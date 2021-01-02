import { CommandModule } from 'yargs';
import hueClient from '../hueClient';
import { write } from '../repository';

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
    (async () => {
      const data = (await hueClient.post('/api', {
        devicetype: argv.user,
      })) as Record<string, any>[]; // todo correct type

      const { username } = data[0].success;

      write({
        username,
      });

      console.log(`Initialization succeeded! username: ${username}`);
    })();
  },
};
