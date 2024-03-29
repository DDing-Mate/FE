import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import PostDetail from "./pages/postdetail/index";
import Post from "./pages/post";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ZZim from "./pages/zzim";
import { Suspense, lazy } from "react";
const MyPage = lazy(() => import("./pages/myPage"));
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
    <div className="App w-[1200px] m-auto relative max-lg:w-full">
      <ToastContainer />
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/write" element={<Post />} />
              <Route path="/edit/:postId" element={<Post />} />

              <Route
                path="/myProfile"
                element={
                  <Suspense fallback={<></>}>
                    <MyPage />
                  </Suspense>
                }
              />

              <Route path="/zzim" element={<ZZim />} />
              <Route path="/post/:postId" element={<PostDetail />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
