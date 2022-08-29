// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVAY0NfawCFRTE3Fv0Z-DJ7dTo_fpDWyw',
  authDomain: 'mundo-invertido-fba37.firebaseapp.com',
  projectId: 'mundo-invertido-fba37',
  storageBucket: 'mundo-invertido-fba37.appspot.com',
  messagingSenderId: '511492402836',
  appId: '1:511492402836:web:54312ba4265e6e7b6e4e81',
  measurementId: 'G-8B7PNLS63R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
