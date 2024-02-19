import React, { useState, useEffect } from "react";
import Postcard from "./Postcard";
import { getMajor, getPosts } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function PostcardsContainer() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  console.log(data);
  // return (
  //   // <div className="flex flex-wrap -m-4">
  //   //   {data?.data.map((post) => (
  //   //     <div
  //   //       key={post.postId}
  //   //       className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
  //   //     >
  //   //       <Postcard data={post} />
  //   //     </div>
  //   //   ))}
  //   // </div>
  // );
}

export default PostcardsContainer;
