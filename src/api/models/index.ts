import { Sequelize } from 'sequelize';
import { CompetitionModelInitializer } from './Competition';
import { GamesModelInitializer } from './Games';
import { AthleteModelInitializer } from './Athlete';
import { OlympicEventModelInitializer } from './OlympicEvent';

export const registerSQLModels = (client: Sequelize) => {
  /**
   * This is the place where your models will be initialized
   * 
   */
  new CompetitionModelInitializer(client).initialize();
  new GamesModelInitializer(client).initialize();
  new AthleteModelInitializer(client).initialize();
  new OlympicEventModelInitializer(client).initialize();
}
