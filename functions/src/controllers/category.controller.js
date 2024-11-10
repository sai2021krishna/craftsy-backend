const { fetchAllCategories } = require("../services/category.service");

const getAllCategories = async (req, res) => {
  try {
    const data = await fetchAllCategories();
    res.send(data);
  } catch (e) {}
};

module.exports = {
  getAllCategories,
};
