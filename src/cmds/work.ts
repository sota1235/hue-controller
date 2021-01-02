import { CommandModule } from 'yargs';
import hueClient from '../hueClient';
import { read } from '../repository';

type Options = {
  user: string;
};

export const workCommand: CommandModule<Record<string, any>, Options> = {
  command: 'work',
  describe: 'change mode for working',
  builder: {},
  handler() {
    (async () => {
      const username = read('username');
      await hueClient.put(`/api/${username}/groups/2/action`, {
        scene: 'K5bJChUt9RdCic6',
      });

      console.log(`Time to work💪`);
    })();
  },
};
