import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { GameService } from '../services'; // This should not be here

export class GameGetController implements Controller {
  constructor(private service: GameService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const games = await this.service.getGames();
      res.status(httpStatus.FOUND).json(games);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
