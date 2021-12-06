import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { GameService } from '../services'; // This should not be here

export class GamePostController implements Controller {
  constructor(private service: GameService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { name } = req.body;
      
    try {
      const game = await this.service.addGame({name});
      response.status(httpStatus.CREATED).json(game);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
