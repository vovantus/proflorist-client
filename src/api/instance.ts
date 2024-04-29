import { FirebaseApp, initializeApp, getApp, getApps } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../utils/config";

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
