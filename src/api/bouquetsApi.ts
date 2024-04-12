
import { DocumentData } from "firebase/firestore";
import { collection, getDocs,doc } from 'firebase/firestore/lite';
import api from "./instance"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ASK:
// думаю надо переопределить определить тип букет, взять DocumentData и вытащить из него часть полей 

// TODO: сделать строку floristname обязательной


interface Api {
    fetchBouquets: (floristName?: string) => Promise<DocumentData[]>,
}


const bouquetsApi:Api = { 
    fetchBouquets: async (floristName = 'rozaexpress') => {        
            const floristsCol = collection(api.provider().db, 'florists');
            const floristDoc = doc(floristsCol, floristName);
            const bouquetsCol = collection(floristDoc, 'bouquets');
            const bouquetsSnapshot = await getDocs(bouquetsCol);
            const bouquetList = bouquetsSnapshot.docs.map(doc => doc.data());
        return bouquetList;  
    }

}


export default bouquetsApi;