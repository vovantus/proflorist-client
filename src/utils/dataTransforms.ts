import Bouquet from "../types/bouquet";
import { DocumentData } from "firebase/firestore/lite";
import FloristInfo from "../types/floristInfo";
import Category from "../types/category";

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

function createCategoryFromDocument(doc: DocumentData): Category {
  return {
    name: doc.name,
    id: doc.id,
    active: doc.active,
    bouquets: doc.bouquets.map((id: string) => id as Bouquet["id"]),
  };
}

export {
  createBouquetFromDocument,
  createFloristFromDocument,
  createCategoryFromDocument,
};
