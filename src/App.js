import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import PostDetail from "./pages/postdetail/Postdetail";
import Post from "./pages/post";
import "./index.css";
import MyPage from "./pages/myPage";
function App() {
  return (
    <div className="App w-[1200px] m-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/write" element={<Post />} />
          <Route path="/myProfile" element={<MyPage />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
