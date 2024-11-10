const express = require("express");
const { getAllCategories } = require("../controllers/category.controller");
const Router = express.Router();

Router.route("/all").get(getAllCategories);

module.exports = {
  categoryRouter: Router,
};
