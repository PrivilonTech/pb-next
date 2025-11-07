import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import firebaseApp from "@/firebase/clientApp";

const COLLECTION_NAME = "homepagePartnerCarousel";

export const fetchHomepagePartnerCarousel = async () => {
  const database = getFirestore(firebaseApp);
  const collectionRef = collection(database, COLLECTION_NAME);
  const collectionQuery = query(collectionRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(collectionQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const addHomepagePartnerCarousel = async ({ imageUrl, link }) => {
  const database = getFirestore(firebaseApp);
  const collectionRef = collection(database, COLLECTION_NAME);

  await addDoc(collectionRef, {
    imageUrl,
    link,
    createdAt: serverTimestamp(),
  });
};

export const deleteHomepagePartnerCarousel = async (documentId) => {
  if (!documentId) {
    return;
  }

  const database = getFirestore(firebaseApp);
  const documentRef = doc(database, COLLECTION_NAME, documentId);

  await deleteDoc(documentRef);
};
