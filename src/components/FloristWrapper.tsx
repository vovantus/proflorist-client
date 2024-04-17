import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetFloristInfo } from "../hooks/useGetFloristInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//ASK 16 04 24 а так ок делать? может надо редирект и враппер в друге место засунуть?

export default function FloristWrapper() {
  const params = useParams();
  const navigate = useNavigate();
  const { error } = useGetFloristInfo(params.floristName);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error]);

  return <Outlet />;
}
