import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { GameService } from '../services'; // This should not be here

export class GameGetByIdController implements Controller {
  constructor(private service: GameService) {};

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const game = await this.service.getGameById(id);
            res.status(httpStatus.FOUND).json(game);
        } catch (error) {
           res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
  }
}
