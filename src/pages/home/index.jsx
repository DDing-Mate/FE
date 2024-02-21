import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import PostcardsContainer from "./components/PostcardsContainer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <PostcardsContainer />
    </div>
  );
}

export default Home;
