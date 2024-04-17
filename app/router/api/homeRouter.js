import { Router } from 'express';
import { homeController } from '../../controller/index.js';
const homeRouter = Router();


/**
 * @swagger
 * /home:
 *   get:
 *     summary: News and events for homepage
 *     description: Retrieve a list for the lastest news and the next events.
 *     responses:
 *       200:
 *         description: A list of news and a list of events
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                    
 *       
 */
homeRouter.get('/home', homeController.getHomeInfos);

export default homeRouter;