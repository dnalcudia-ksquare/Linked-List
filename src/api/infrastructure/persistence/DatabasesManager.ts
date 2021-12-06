import Logger from '../Logger';
import { sqlClient } from './sql/SQLClientFactory';

export class DatabasesManager {
  constructor(private logger: Logger) {};

  async openConnection(): Promise<void>{
    await sqlClient.init();
    this.logger.info('Databases connection initiated correctly');
  };

  async closeConnection(): Promise<void> {
    await sqlClient.finish()
    this.logger.info('Databases connection closed correctly');
  };

  async drop(): Promise<void> {
    await sqlClient.drop()
    this.logger.info('Databases dropped correctly');
  }
};
