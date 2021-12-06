import { Router, Request, Response } from 'express';
import { athleteGetByIdController, athleteGetController, athletePostController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/athletes', (req: Request, res: Response) => athletePostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/athletes', (req: Request, res: Response) => athleteGetController.run(req, res));

   /**
   * GET /
   * Get a single user and his posts
   */
  router.get('/athletes/:id', (req: Request, res: Response) => athleteGetByIdController.run(req, res));
};
