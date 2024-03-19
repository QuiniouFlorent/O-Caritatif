const debug = require('debug')('app:router');
const express = require('express');
const apiRouter = require('./api');

const router = express.Router();

debug('main router initialized');
module.exports = router;