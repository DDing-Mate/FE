import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import Postcard from "./components/Postcard";
function Home() {
  const postcards = Array.from({ length: 16 }, (_, index) => (
    <div key={index} className="py-1 px-2">
      <Postcard />
    </div>
  ));
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {postcards}
      </div>
    </div>
  );
}

export default Home;
