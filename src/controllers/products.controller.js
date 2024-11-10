const { fetchAllProducts } = require("../services/products.service")

const getProductsByCategory = async (req, res) => {
    try{
        const { category } = req.query;
        const data = await fetchAllProducts(category);

        res.send(data);
    }
    catch (e) {

    }
}

module.exports = {
    getProductsByCategory
}