import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Bouquet from "../types/bouquet";

export default function useFetchBouquetImage(bouquet: Bouquet) {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      const storage = getStorage();
      const imageRef = ref(storage, bouquet.images[0]);
      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to load image from Firebase Storage", error);
        setError(true);
      }
    };

    if (bouquet) {
      fetchImage();
    }
  }, [bouquet]);

  return {
    imageUrl,
    error,
  };
}
