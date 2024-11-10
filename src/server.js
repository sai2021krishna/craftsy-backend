const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const { categoryRouter } = require("./routes/category.route");
const { productRouter } = require("./routes/products.route");
const port = 3001;

const app = express();

app.use("/category", categoryRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
