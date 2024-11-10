const { collection } = require("../helper/firestore.helper");

const categoryCollection = collection("category");

const fetchAllCategories = async () => {
  console.log("in service");
  const categorySnapshot = await categoryCollection.get();
  console.log(categorySnapshot);
  return !categorySnapshot.empty
    ? categorySnapshot.docs.map((doc) => {
        return { id: doc.id, data: doc.data() };
      })
    : [];
};

module.exports = { fetchAllCategories };
