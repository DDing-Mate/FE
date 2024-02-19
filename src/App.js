import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import PostDetail from "./pages/postdetail/Postdetail";
import Post from "./pages/post";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import MyPage from "./pages/myPage";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App w-[1200px] m-auto relative">
      <ToastContainer />
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/write" element={<Post />} />
              <Route path="/post/:postId" element={<PostDetail />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
