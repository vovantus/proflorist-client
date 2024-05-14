import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import useBoundStore from "../store/boundStore";
import { createFloristFromDocument } from "../utils/dataTransforms";
import { useLocation } from "react-router-dom";
import useSubdomain from "./useSubdomain";

export function useGetFloristInfo() {
  const floristInfo = useBoundStore((state) => state.floristInfo);
  const updateFloristInfo = useBoundStore((state) => state.updateFloristInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const { subdomain } = useSubdomain();

  useEffect(() => {
    if (floristInfo.name) {
      setIsLoading(false);
      return;
    }
    if (subdomain) {
      floristApi
        .fetchFloristInfo(subdomain)
        .then((data) => {
          if (data) {
            updateFloristInfo(createFloristFromDocument(data));
          }
        })
        .catch((e) => {
          setError(e.name);
          const newHost = window.location.host.replace(`${subdomain}.`, "");
          window.location.href = `//${newHost}${location.pathname}`;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [subdomain]);

  return {
    floristInfo,
    isLoading,
    error,
  };
}
