import { CommandModule } from 'yargs';
import hueClient from '../hueClient';
import { read } from '../repository';

export const workCommand: CommandModule = {
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
