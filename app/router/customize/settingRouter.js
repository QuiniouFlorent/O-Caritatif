import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { settingController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const settingRouter = Router();

settingRouter.get('/setting', settingController.getSetting);

settingRouter.post('/setting', authentification.isAdmin, upload('setting').single('image'), settingController.createSetting);

settingRouter.patch('/setting', authentification.isAdmin, settingController.updateSetting);
settingRouter.patch('/setting/logo', authentification.isAdmin, upload('setting').single('image'), settingController.updateSettingLogo);

settingRouter.delete('/setting', authentification.isAdmin, settingController.removeSetting);

export default settingRouter;