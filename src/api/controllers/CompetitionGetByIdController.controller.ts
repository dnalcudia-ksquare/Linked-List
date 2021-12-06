import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CompetitionService } from '../services'; // This should not be here

export class CompetitionGetByIdController implements Controller {
  constructor(private service: CompetitionService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const competitions = await this.service.getCompetitions();
      res.status(httpStatus.FOUND).json(competitions);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
