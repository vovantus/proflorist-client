// ASK 16 04 2024: ок так называть файл и класть сюда?
// нужно ли включать какие-то доп проверки?

import Bouquet from "../types/bouquet";
import { DocumentData } from "firebase/firestore/lite";
import FloristInfo from "../types/floristInfo";


function createBouquetFromDocument(doc: DocumentData): Bouquet {
  return {
    name: doc.name,
    description: doc.description,
    price: doc.price,
    images: doc.images,
    availability: doc.availability ? doc.availability : false,
    id: doc.id,
  };
}

function createFloristFromDocument(doc: DocumentData): FloristInfo {
  return {
    name: doc.name,
    location: doc.location,
    contactInfo: doc.contactInfo,
  };
}

export { createBouquetFromDocument, createFloristFromDocument };
