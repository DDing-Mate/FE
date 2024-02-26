import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function withAuth(WrapperComponent) {
  return () => {
    const [cookies] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
      if (!cookies.token) {
        navigate("/");
        toast.info("로그인 후 이용해주세요");
      }
    }, []);

    return <WrapperComponent />;
  };
}
