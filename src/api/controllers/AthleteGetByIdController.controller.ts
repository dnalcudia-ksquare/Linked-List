import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { AthletesService } from '../services'; // This should not be here

export class AthleteGetByIdController implements Controller {
  constructor(private service: AthletesService) {};

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const athlete = await this.service.getAthleteById(id);
            res.status(httpStatus.FOUND).json(athlete);
        } catch (error) {
           res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
  }
}
