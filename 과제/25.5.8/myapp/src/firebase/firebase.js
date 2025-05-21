// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzIevz7vSg7QOdDJERP5c7CKXPwCSE38M",
    authDomain: "homepage-d3816.firebaseapp.com",
    projectId: "homepage-d3816",
    storageBucket: "homepage-d3816.firebasestorage.app",
    messagingSenderId: "425550059564",
    appId: "1:425550059564:web:fef267432a8cc637be1989",
    measurementId: "G-PZEJ7KJK8S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
