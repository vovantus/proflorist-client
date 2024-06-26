/**
 *
 * To Whom It May Concern ;)
 *
 * In case of Firebase SDK Storing configuration on the client side is generally safe and is the standard practice 
 * for Firebase client applications.
 * The configuration details such as apiKey, authDomain, projectId, etc., are used to identify
 * your Firebase project and allow your application to communicate with Firebase services.
 *
 * Also this is demonstrational pet project, the better way is to store it in .env files for different environments (dev, stage, prod, etc..)
 * 
 */

const firebaseConfig = {
  apiKey: "AIzaSyB_1IEoc-E0NgyxxJgBozIJlbaLDmRpTKE",
  authDomain: "proflorist-54699.firebaseapp.com",
  projectId: "proflorist-54699",
  storageBucket: "proflorist-54699.appspot.com",
  messagingSenderId: "572424592586",
  appId: "1:572424592586:web:830fd141e3c9fb2f742833",
  measurementId: "G-CJYNB5JXVY",
} as const;

export { firebaseConfig };
