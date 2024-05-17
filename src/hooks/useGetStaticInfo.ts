import { useEffect, useState } from "react";
import About from "../types/about";
import Contacts from "../types/contacts";
import floristApi from "../api/floristApi";
import {
  createAboutFromDocument,
  createContactsFromDocument,
} from "../utils/dataTransforms";

type StaticInfoType<T> = T extends "about"
  ? About
  : T extends "contacts"
  ? Contacts
  : never;

export default function useGetStaticInfo<T extends "about" | "contacts">(
  florist: string = "",
  pageName: T
) {
  const [info, setInfo] = useState<StaticInfoType<T> | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    floristApi
      .fetchStaticInfo(florist, pageName)
      .then((data) => {
        if (pageName === "about")
          setInfo(createAboutFromDocument(data) as StaticInfoType<T>);
        if (pageName === "contacts")
          setInfo(createContactsFromDocument(data) as StaticInfoType<T>);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { info, isLoading, error };
}
