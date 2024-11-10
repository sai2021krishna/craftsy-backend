const { fetchAllCategories } = require("../services/category.service");

const getAllCategories = async (req, res) => {
  try {
    console.log('in controller')
    const data = await fetchAllCategories();
    res.send(data);
  } catch (e) {}
};

module.exports = {
  getAllCategories,
};
