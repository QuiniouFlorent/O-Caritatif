import upload from '../../service/multer/multer-config.js';
import { executivememberController } from '../../controller/index.js';
const executivememberRouter = Router();

executivememberRouter.get('/executivemember', executivememberController.getAllExecutivemember);
executivememberRouter.get('/executivemember/:id', executivememberController.getOneExecutivemember);

executivememberRouter.post('/executivemember', upload('executivemember').single('image'), executivememberController.createExecutivemember);

executivememberRouter.patch('/executivemember', executivememberController.updateExecutivemember);
executivememberRouter.patch('/executivemember/photo', upload('executivemember').single('image'), executivememberController.updateExecutivememberPhoto);

executivememberRouter.delete('/executivemember', executivememberController.removeExecutivemember);

export default executivememberRouter;