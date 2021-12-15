const express = require('express');
const newInsurance = require('../controllers/insuranceController');

const Router = express.Router();

Router.post('/insurance', newInsurance);

Router.post('/coverage');

Router.get('/insurance/:id');

Router.get('/coverage/:id');

Router.post('/simulator');

module.exports = Router;