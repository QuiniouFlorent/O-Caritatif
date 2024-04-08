import upload from '../../service/multer/multer-config.js';
import { boardmemberController } from '../../controller/index.js';
import { Router } from 'express';
import authentification from '../../service/authentification/auth.js';
const boardmemberRouter = Router();

boardmemberRouter.get('/boardmember', boardmemberController.getAllBoardmember);
boardmemberRouter.get('/boardmember/:id', boardmemberController.getOneBoardmember);

boardmemberRouter.post('/boardmember', authentification.isAdmin, upload('boardmember').single('image'), boardmemberController.createBoardmember);

boardmemberRouter.patch('/boardmember/updateposition', authentification.isAdmin, boardmemberController.updateBoardmemberPosition);
boardmemberRouter.patch('/boardmember/:id', authentification.isAdmin, boardmemberController.updateBoardmember);
boardmemberRouter.patch('/boardmember/:id/photo', authentification.isAdmin, upload('boardmember').single('image'), boardmemberController.updateBoardmemberPhoto);

boardmemberRouter.delete('/boardmember/:id', authentification.isAdmin, boardmemberController.removeBoardmember);

export default boardmemberRouter;