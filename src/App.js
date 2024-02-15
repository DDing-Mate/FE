import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import PostDetail from "./pages/postdetail/Postdetail";
import Post from "./pages/post";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
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
    </div>
  );
}

export default App;
