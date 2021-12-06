import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { AthletesService } from '../services'; // This should not be here

export class AthletePostController implements Controller {
  constructor(private service: AthletesService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { firstName, middleName, lastName, country, dob } = req.body;
      
    try {
      const athlete = await this.service.addAthlete({ firstName, middleName, lastName, country, dob});
      response.status(httpStatus.CREATED).json(athlete);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
