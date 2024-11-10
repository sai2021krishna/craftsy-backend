require("firebase-functions/v2/firestore");
const express = require("express");
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");

const app = express();

initializeApp();

const { categoryRouter } = require("./routes/category.route");
const { productRouter } = require("./routes/products.route");

app.use("/category", categoryRouter);
app.use("/products", productRouter);

exports.api = onRequest(app);
