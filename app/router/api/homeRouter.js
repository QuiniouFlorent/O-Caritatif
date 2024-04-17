import { Router } from 'express';
import { homeController } from '../../controller/index.js';
const homeRouter = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *     type: object
 *     required:
 *       
 *     properties:
 *      
 */

/**
 * @openapi
 * /home:
 *   get:
 *     description: Page d'accueil
 *     tags:
 *       - 
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     produces:
 *        - application/json
 *     responses:
 *       200:
 *         description: 
 *       400:
 *         description:
 */
homeRouter.get('/home', homeController.getHomeInfos);

export default homeRouter;