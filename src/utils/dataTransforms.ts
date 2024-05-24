import Bouquet from "../types/bouquet";
import { DocumentData } from "firebase/firestore/lite";
import FloristInfo from "../types/floristInfo";
import Category from "../types/category";
import News from "../types/news";
import About from "../types/about";
import Contacts from "../types/contacts";
import Social from "../types/social";
import DeliveryOptions from "../types/deliveryOptions";
import Delivery from "../types/delivery";

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

function createAboutFromDocument(doc: DocumentData): About {
  return {
    text: doc.text,
    header: doc.header,
    image: doc.image,
  };
}

function createSocialFromDoc(doc: DocumentData): Social {
  return {
    facebook: doc.facebook ?? null,
    instagram: doc.instagram ?? null,
    phone: doc.phone ?? null,
    twitter: doc.twitter ?? null,
    whatsapp: doc.whatsapp ?? null,
  };
}

function createContactsFromDocument(doc: DocumentData): Contacts {
  const contacts: Contacts = {
    text: doc.text,
  };

  if (doc.contacts) {
    contacts.contacts = createSocialFromDoc(doc.contacts);
  }

  return contacts;
}

function createDeliveryOptionsFromDoc(doc: DocumentData): DeliveryOptions {
  return {
    courier: doc.courier ?? null,
    event: doc.event ?? null,
    pickup: doc.pickup ?? null,
  };
}

function createDeliveryInfoFromDocument(doc: DocumentData): Delivery {
  const delivery: Delivery = {
    text: doc.text,
  };

  if (doc.deliveryOptions) {
    delivery.deliveryOptions = createDeliveryOptionsFromDoc(
      doc.deliveryOptions
    );
  }

  return delivery;
}

export {
  createBouquetFromDocument,
  createFloristFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
  createAboutFromDocument,
  createContactsFromDocument,
  createDeliveryInfoFromDocument,
};
