const express = require('express');

const UserController = require('./Controllers/UserController');
const ClientController = require('./Controllers/ClientController')
const SessionController = require('./Controllers/SessionController')

const routes = express.Router(); 

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.post('/session', SessionController.create);

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.delete('/clients/:id', ClientController.delete);
routes.put('/clients/:id', ClientController.update);

module.exports = routes;