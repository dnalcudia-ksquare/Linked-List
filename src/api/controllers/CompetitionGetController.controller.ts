import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CompetitionService } from '../services'; // This should not be here

export class CompetitionGetController implements Controller {
  constructor(private service: CompetitionService) {};

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const competition = await this.service.getCompetitionById(id);
            res.status(httpStatus.FOUND).json(competition);
        } catch (error) {
           res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
  }
}
