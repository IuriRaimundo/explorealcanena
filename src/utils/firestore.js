import { app } from './firebase';

const db = app.firestore();

const fetchCategoryPlaces = async (c) => {
  let placeList = [];
  const collectionRef = db.collection('local');
  await collectionRef
    .where('categorias', 'array-contains', c)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        placeList.push(doc.data());
      });
    });
  return placeList;
};

const addDocument = (collection, data, docId) => {
  const collectionRef = db.collection(collection);
  collectionRef.doc(docId).set(data);
};

const getAllPlacesName = async () => {
  const collectionRef = db.collection('local');
  let places = [];
  await collectionRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      let { nome } = doc.data();
      places.push(nome);
    });
  });
  return places;
};

const fetchEvents = async () => {
  const collectionRef = db.collection('eventos');
  let events = [];
  await collectionRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      events.push(doc.data());
    });
  });
  return events;
};

const getAllPlaces = async () => {
  const collectionRef = db.collection('local');
  let results = [];
  await collectionRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      results.push(doc.data());
    });
  });
  return results;
};

export const firestoreOperations = {
  fetchCategoryPlaces,
  addDocument,
  getAllPlacesName,
  fetchEvents,
  getAllPlaces,
};
