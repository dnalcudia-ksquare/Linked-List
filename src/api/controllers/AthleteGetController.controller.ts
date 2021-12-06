import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { AthletesService } from '../services'; // This should not be here

export class AthleteGetController implements Controller {
  constructor(private service: AthletesService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const athletes = await this.service.getAthletes();
      res.status(httpStatus.FOUND).json(athletes);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
