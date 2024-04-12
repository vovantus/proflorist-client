// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getFirestore, } from 'firebase/firestore/lite';
import { firebaseConfig } from "../utils/config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



interface ApiSdk {
    firebaseApp: FirebaseApp,
    db: Firestore,
}

interface Api {
    sdk: ApiSdk | null,
    provider: () => ApiSdk,
}



const api:Api = {
    sdk: null,

    provider() {
        if (api.sdk){
            return api.sdk
        }
        const firebaseApp = initializeApp(firebaseConfig);
        const db = getFirestore(firebaseApp);
        return { firebaseApp, db}
    }

}


export default api;



