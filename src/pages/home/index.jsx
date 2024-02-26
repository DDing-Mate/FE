import Header from "../../components/Header";
import Banner from "./components/Banner";
import PostcardsContainer from "./components/PostcardsContainer";
import TypeSelector from "./components/TypeSelector";
import React, { Suspense, useState } from "react";

function Home() {
  const [selectedType, setSelectedType] = useState("all");

  return (
    <div>
      <Header />
      <Banner />
      <TypeSelector setSelectedType={setSelectedType} />
      <Suspense fallback={<></>}>
        <PostcardsContainer selectedType={selectedType} />
      </Suspense>
    </div>
  );
}

export default Home;
