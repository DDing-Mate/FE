import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import PostcardsContainer from "./components/PostcardsContainer";
import TypeSelector from "./components/TypeSelector";
import React, { useState } from "react";

function Home() {
  const [selectedType, setSelectedType] = useState("all");

  return (
    <div>
      <Header />
      <Banner />
      <TypeSelector setSelectedType={setSelectedType} />
      <PostcardsContainer selectedType={selectedType} />
    </div>
  );
}

export default Home;
