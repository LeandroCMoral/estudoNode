const express = require('express');


const ongsController = require('./Controllers/ongsController');
const incidentsController = require('./Controllers/incidentsController');



const routes = express.Router();


routes.post('/ongs/create', ongsController.create);
routes.get('/ongs', ongsController.getOngs);

routes.post('/incidents/create', incidentsController.create);
routes.get('/incidents', incidentsController.getIncidents);
routes.delete('/incidents/delete/:id', incidentsController.deleteIncidents);




module.exports = routes;