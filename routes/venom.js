const express = require('express');
const routes = express.Router();
const controller = require('../controller/venom');

routes.post('/send-message', controller.send);
routes.post('/contacts', controller.contacts);

module.exports = routes;
