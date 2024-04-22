import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import FloristInfo from "../types/floristInfo";
import { createFloristFromDocument } from "../utils/dataTransforms";
import { useNavigate, useLocation } from "react-router-dom";

export function useGetFloristInfo() {
  const [subdomain, setSubdomain] = useState("");
  const [floristInfo, setFloristInfos] = useState<FloristInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0]);
  }, []);

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
          console.log(newHost);
          navigate(`//${newHost}${location.pathname}`, { replace: true });
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
