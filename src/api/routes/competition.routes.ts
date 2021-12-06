import { Router, Request, Response } from 'express';
import { competitionGetController, competitionPostController, competitionGetByIdController  } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/competition', (req: Request, res: Response) => competitionPostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/competition', (req: Request, res: Response) => competitionGetController.run(req, res));

   /**
   * GET /
   * Get a single user and his posts
   */
  router.get('/competition/:id', (req: Request, res: Response) => competitionGetByIdController.run(req, res));
};
