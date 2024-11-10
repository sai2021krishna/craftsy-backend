const admin = require("firebase-admin");

const collection = (collectionName) => {
    console.log(collectionName)
  return admin.firestore().collection(collectionName);
};

const doc = (collection, docId) => {
  if (!docId) return collection().doc();
  return collection().doc(docId);
};

module.exports = {
    collection,
    doc
}
