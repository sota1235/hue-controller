import { CommandModule } from 'yargs';
import hueClient from '../hueClient';
import { read } from '../repository';

export const scenesCommand: CommandModule = {
  command: 'scenes',
  describe: 'get scenes data',
  builder: {},
  handler() {
    (async () => {
      const username = read('username');
      const data = await hueClient.get(`/api/${username}/scenes`);

      console.log(data); // todo rich preview
    })();
  },
};
