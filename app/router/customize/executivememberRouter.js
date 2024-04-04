import upload from '../../service/multer/multer-config.js';
import { executivememberController } from '../../controller/index.js';
import { Router } from 'express';
const executivememberRouter = Router();

executivememberRouter.get('/executivemember', executivememberController.getAllExecutivemember);
executivememberRouter.get('/executivemember/:id', executivememberController.getOneExecutivemember);

executivememberRouter.post('/executivemember', upload('executivemember').single('image'), executivememberController.createExecutivemember);

executivememberRouter.patch('/executivemember/:id', executivememberController.updateExecutivemember);
executivememberRouter.patch('/executivemember/photo', upload('executivemember').single('image'), executivememberController.updateExecutivememberPhoto);

executivememberRouter.delete('/executivemember', executivememberController.removeExecutivemember);

export default executivememberRouter;