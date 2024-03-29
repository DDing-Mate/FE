import React, { useState, useEffect } from "react";
import Postcard from "./Postcard";
import { getPosts, getTypePosts } from "../../../api";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

function PostcardsContainer({ selectedType }) {
  const { data, error, isLoading } = useSuspenseQuery({
    queryKey: ["posts", selectedType],

    queryFn:
      selectedType === "all"
        ? getPosts
        : () => getTypePosts(encodeURIComponent(selectedType)),
  });

  return (
    <div className="flex flex-wrap -m-4">
      {data?.data.data.map((post) => (
        <div
          key={post.postId}
          className="px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <Postcard data={post} />
        </div>
      ))}
    </div>
  );
}

export default PostcardsContainer;
