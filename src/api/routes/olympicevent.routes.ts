import { Router, Request, Response } from 'express';
import { olympicEventGetController, olympicEventPostController, olympicEventGetByIdController  } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/olympicEvent', (req: Request, res: Response) => olympicEventPostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/olympicEvent', (req: Request, res: Response) => olympicEventGetController.run(req, res));

   /**
   * GET /
   * Get a single user and his posts
   */
  router.get('/olympicEvent/:id', (req: Request, res: Response) => olympicEventGetByIdController.run(req, res));
};
