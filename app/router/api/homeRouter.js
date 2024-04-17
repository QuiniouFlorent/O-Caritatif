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
 *                          type: integer
 *                          description: The news ID.
 *                          example: 1
 *                        title:
 *                          type: string
 *                          description: The news title.
 *                          example: Océans propres
 *                        category:
 *                          type: string
 *                          description: The news category.
 *                          example: Action environnementale
 *                        photo_url:
 *                          type: string
 *                          description: The news photo_url.
 *                          example: https://res.cloudinary.com/dzjy8zt2z/image/upload/v1713274225/user/AlmaLogopetit.jpg1713274224379.jpg
 *                        summary:
 *                          type: string
 *                          description: The news summary.
 *                          example: Joignez-vous à nous pour une journée de nettoyage des plages, pour protéger notre littoral et les espèces marines. Tous les matériaux seront fournis sur place
 *                        created_at:
 *                          type: date
 *                          description: The news creation date.
 *                          example: 2024-04-16 13:08:35.083124+00
 *                        lastname:
 *                          type: string
 *                          description: The author's lastname
 *                          example: Schneider
 *                        firstname:
 *                          type: string
 *                          description: The author's firstname
 *                          example: Florent
 *                        count:
 *                          type: int
 *                          description: The number of comment for this news
 *                          example: 2
 */

homeRouter.get('/home', homeController.getHomeInfos);

export default homeRouter;