const debug = require('debug')('app:server');
require('dotenv').config();
const router = require('./app/router');
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    debug(`Server started on http://localhost:${PORT}`);
});
