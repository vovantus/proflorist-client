import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import FloristInfo from "../types/floristInfo";
import { createFloristFromDocument } from "../utils/dataTransforms";
import { useLocation } from "react-router-dom";
import useSubdomain from "./useSubdomain";

export function useGetFloristInfo() {
  const [floristInfo, setFloristInfos] = useState<FloristInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const { subdomain } = useSubdomain();

  useEffect(() => {
    if (subdomain) {
      floristApi
        .fetchFloristInfo(subdomain)
        .then((data) => {
          if (data) {
            setFloristInfos(createFloristFromDocument(data));
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
    subdomain,
    floristInfo,
    isLoading,
    error,
  };
}
