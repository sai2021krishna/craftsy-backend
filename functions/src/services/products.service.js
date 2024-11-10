const { collection } = require("../helper/firestore.helper");

const productsCollection = collection("product");

const fetchAllProducts = async (category) => {
  const productsSnapshot = await productsCollection
    .where("category", "==", category)
    .get();
    return !productsSnapshot.empty
    ? productsSnapshot.docs.map((doc) => {
        return { id: doc.id, data: doc.data() };
      })
    : [];
};

module.exports = {
    fetchAllProducts
}
