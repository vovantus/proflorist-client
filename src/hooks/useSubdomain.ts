import { useEffect, useState } from "react";

export default function useSubdomain() {
  const [subdomain, setSubdomain] = useState("");
  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0]);
  }, []);

  return {
    subdomain,
  };
}
