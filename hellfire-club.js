import app from './app.js';
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribeToHellfireClub(subscripton) {
  const db = getFirestore(app);
  const hellfireClubCollection = collection(db, 'hellfire-club');
  const docRef = await addDoc(hellfireClubCollection, subscripton);
  return docRef.id;
}
