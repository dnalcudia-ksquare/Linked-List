import { Server } from '../server';
import { App } from '../app';

let app: App;
let server: Server;
 
beforeAll(async () => {
  app = new App();
  await app.start();
  server = (app.httpServer as unknown) as Server;
 });
 
afterAll(async () => {
  await app.stop();
});

describe('Olympic Games API tests', () => {
  /**
   * Put your tests here
   */
});
