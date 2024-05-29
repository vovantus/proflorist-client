import { useEffect, useState } from "react";

function getSubdomain() {
  const host = window.location.host;
  const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
  return arr.length > 0 ? arr[0] : "";
}

export default function useSubdomain() {
  const [subdomain, setSubdomain] = useState(getSubdomain);

  useEffect(() => {
    setSubdomain(getSubdomain());
  }, []);

  return {
    subdomain,
  };
}