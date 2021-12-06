import { Router, Request, Response } from 'express';
import { gamesGetController, gamesPostController, gamesGetByIdController  } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/games', (req: Request, res: Response) => gamesPostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/games', (req: Request, res: Response) => gamesGetController.run(req, res));

   /**
   * GET /
   * Get a single user and his posts
   */
  router.get('/games/:id', (req: Request, res: Response) => gamesGetByIdController.run(req, res));
};
