const { collection } = require("../helper/firestore.helper");
//const admin = require("firebase-admin");

const categoryCollection = collection("category");

const fetchAllCategories = async () => {
  const categorySnapshot = await categoryCollection.get();
  return !categorySnapshot.empty
    ? categorySnapshot.docs.map((doc) => {
        return { id: doc.id, data: doc.data() };
      })
    : [];
};

module.exports = { fetchAllCategories };
