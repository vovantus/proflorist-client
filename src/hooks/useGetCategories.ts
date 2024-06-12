import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Category from "../types/category";

export function useGetCategories(florist: string = "") {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (florist == "") return;
    floristApi
      .fetchCategories(florist)
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [florist]);

  return {
    categories,
    isLoading,
    error,
  };
}
