import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useCookies } from "react-cookie";
import PostBody from "./components/PostBody";
import SkeletonUI from "../../components/SkeletonUI";

function PostDetail() {
  const { postId } = useParams();
  const [cookies] = useCookies();

  return (
    <div>
      <Header />
      <Suspense fallback={<></>}>
        <PostBody cookies={cookies} postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetail;
