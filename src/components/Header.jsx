import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";

function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <span className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
            띵메이트
          </span>
        </div>
        <div>
          <span
            className="btn btn-ghost text-xl"
            onClick={() => navigate("/write")}
          >
            새 글쓰기
          </span>
        </div>
        <div>
          <span
            className="btn btn-ghost text-xl"
            onClick={() => {
              setVisible(true);
            }}
          >
            로그인
          </span>
        </div>
      </div>
      {visible && <Login setVisible={setVisible}></Login>}
    </>
  );
}

export default Header;
