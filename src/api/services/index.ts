import { AthletesService } from "./athletes.service";
import { CompetitionService } from "./competition.service";
import { GameService } from "./games.service";

const athletesService = new AthletesService();
const competitionService = new CompetitionService();
const gameService = new GameService();

/**
 * We should not export the class to use as type.
 * 
 * The services should be behind an abstraction like
 * commandBus who knows details about the services
 * 
*/
export { athletesService, AthletesService, competitionService, CompetitionService, gameService, GameService}
