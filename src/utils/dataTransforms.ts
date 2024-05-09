import Bouquet from "../types/bouquet";
import { DocumentData } from "firebase/firestore/lite";
import FloristInfo from "../types/floristInfo";
import Category from "../types/category";
import News from "../types/news";

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
  };
}

function createNewsFromDocument(doc: DocumentData): News {
  return {
    id: doc.id,
    header: doc.header,
    text: doc.text,
    date: doc.date.toDate(),
    imageUrl: doc.imageUrl,
    linkTitle: doc.linkTitle ?? null,
    categoryId: doc.categoryId ?? null,
  };
}

export {
  createBouquetFromDocument,
  createFloristFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
};
