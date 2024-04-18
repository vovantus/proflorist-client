import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
