import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { settingController } from '../../controller/index.js';
const settingRouter = Router();

settingRouter.get('/setting', settingController.getSetting);

settingRouter.post('/setting', upload('setting').single('image'), settingController.createSetting);

settingRouter.patch('/setting', settingController.updateSetting);
settingRouter.patch('/setting/logo', upload('setting').single('image'), settingController.updateSettingLogo);

settingRouter.delete('/setting', settingController.removeSetting);

export default settingRouter;