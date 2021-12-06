import { AthleteGetController } from './AthleteGetController.controller';
import { AthleteGetByIdController } from './AthleteGetByIdController.controller';
import { AthletePostController } from './AthletePostController.controller';
import { CompetitionGetByIdController } from './CompetitionGetByIdController.controller';
import { CompetitionGetController } from './CompetitionGetController.controller';
import { CompetitionPostController } from './CompetitionPostController.controller';
import { GameGetByIdController } from './GameGetByIdController.controller';
import { GameGetController } from './GameGetController.controller';
import { GamePostController } from './GamePostController.controller';
import { athletesService, competitionService, gameService } from '../services'; // This should not be here

export const athleteGetController = new AthleteGetController(athletesService)
export const athleteGetByIdController = new AthleteGetByIdController(athletesService)
export const athletePostController = new AthletePostController(athletesService)
export const competitionGetByIdController = new CompetitionGetByIdController(competitionService)
export const competitionGetController = new CompetitionGetController(competitionService)
export const competitionPostController = new CompetitionPostController(competitionService)
export const gameGetByIdController = new GameGetByIdController(gameService)
export const gameGetController = new GameGetController(gameService)
export const gamePostController = new GamePostController(gameService)
