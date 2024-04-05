import upload from '../../service/multer/multer-config.js';
import { boardmemberController } from '../../controller/index.js';
import { Router } from 'express';
import authentification from '../../service/authentification/auth.js';
const boardmemberRouter = Router();

boardmemberRouter.get('/boardmember', /*authentification.isAdmin,*/ boardmemberController.getAllBoardmember);
boardmemberRouter.get('/boardmember/:id', boardmemberController.getOneBoardmember);

boardmemberRouter.post('/boardmember', upload('boardmember').single('image'), boardmemberController.createBoardmember);

boardmemberRouter.patch('/boardmember/:id', boardmemberController.updateBoardmember);
boardmemberRouter.patch('/boardmember/:id/photo', upload('boardmember').single('image'), boardmemberController.updateBoardmemberPhoto);

boardmemberRouter.delete('/boardmember/:id', boardmemberController.removeBoardmember);

export default boardmemberRouter;