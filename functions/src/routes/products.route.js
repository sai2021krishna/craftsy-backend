const express = require('express');
const { getProductsByCategory } = require('../controllers/products.controller');
const Router = express.Router();

Router.route('/all').get(getProductsByCategory);

module.exports = {
    productRouter: Router
}