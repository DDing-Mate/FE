import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/login";
import { useCookies } from "react-cookie";
import Modal from "./modal/Modal";
function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

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
            onClick={() => {
              if (!cookies.token) setVisible(true);
              else navigate("/write");
            }}
          >
            새 글쓰기
          </span>
        </div>
        <div>
          {!cookies.token ? (
            <span
              className="btn btn-ghost text-xl"
              onClick={() => {
                setVisible(true);
              }}
            >
              로그인
            </span>
          ) : (
            <details className="dropdown">
              <summary className="btn text-xl">내 정보</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <Link to={"/zzim"}>찜한 글</Link>
                </li>
                <li>
                  <Link to={"/myProfile"}>내 정보</Link>
                </li>
                <li>
                  <span onClick={() => removeCookie("token")}>로그아웃</span>
                </li>
              </ul>
            </details>
          )}
        </div>
      </div>
      {visible && (
        <Modal closeModal={() => setVisible(false)}>
          <Login />
        </Modal>
      )}
    </>
  );
}

export default Header;
