// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp, getApp, getApps } from "firebase/app";
// import { Firestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore/lite";
import { Firestore, getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../utils/config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface ApiSdk {
  firebaseApp: FirebaseApp;
  db: Firestore;
}

interface Api {
  sdk: ApiSdk | null;
  provider: () => ApiSdk;
}

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const api: Api = {
  sdk: null,

  provider() {
    if (api.sdk) {
      return api.sdk;
    }
    const firebaseApp = getApp();
    const db = getFirestore(firebaseApp);
    return { firebaseApp, db };
  },
};


export default api;



