import { CommandModule } from 'yargs';
import hueClient from '../hueClient';
import { read } from '../repository';

export const enjoyCommand: CommandModule = {
  command: 'enjoy',
  describe: 'change mode for private time',
  builder: {},
  handler() {
    (async () => {
      const username = read('username');
      await hueClient.put(`/api/${username}/groups/2/action`, {
        scene: 'Ur0ChCrOcgefG06',
      });

      console.log(`Time to enjoy your time☕️`);
    })();
  },
};
