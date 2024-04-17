// ASK 16 04 2024: ок так называть файл и класть сюда?
// нужно ли включать какие-то доп проверки?

import { Bouquet } from "../types/bouquet";
import { DocumentData } from "firebase/firestore/lite";

function createBouquetFromDocument(doc: DocumentData): Bouquet {
  return {
    name: doc.name,
    description: doc.description,
    price: doc.price,
    images: doc.images,
    availability: doc.availability ? doc.availability : false,
  };
}

export { createBouquetFromDocument };
