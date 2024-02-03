import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <span className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          띵메이트
        </span>
      </div>
      <div>
        <span
          className="btn btn-ghost text-xl"
          onClick={() => navigate("/register")}
        >
          새 글쓰기
        </span>
      </div>
      <div>
        <span
          className="btn btn-ghost text-xl"
          onClick={() => navigate("/login")}
        >
          로그인
        </span>
      </div>
    </div>
  );
}

export default Header;
