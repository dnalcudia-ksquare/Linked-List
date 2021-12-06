import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CompetitionService } from '../services'; // This should not be here

export class CompetitionPostController implements Controller {
  constructor(private service: CompetitionService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { game,
    startDateTime,
    olympicEvent,
    //athleteIds: [],
    medals } = req.body;
      
    try {
      const competition = await this.service.addCompetition({ game, startDateTime, olympicEvent, medals});
      response.status(httpStatus.CREATED).json(competition);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
