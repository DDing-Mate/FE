import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import "./index.css";
function App() {
  return (
    <div className="App w-[1200px] m-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
