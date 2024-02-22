import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import contactIcon from "../../img/contact.png";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api";
import Comments from "./components/Comments";
import { useCookies } from "react-cookie";
import PostInfo from "./components/PostInfo";
import PostButtons from "./components/PostButtons";

function PostDetail() {
  const { postId } = useParams();
  const [cookies] = useCookies();
  const { data, isLoading } = useQuery({
    queryFn: () => getPost({ id: postId, token: cookies.token }),
    queryKey: ["postDetail"],
  });
  console.log(data);

  if (isLoading) return null;
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <div className="flex">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex-1">
            {data.data.data.title}
          </h2>
          <PostButtons id={postId} />
        </div>
        <PostInfo
          memberName={data.data.data.memberName}
          dueDate={data.data.data.dueDate}
          type={data.data.data.type}
          number={data.data.data.number}
          categories={data.data.data.categories}
          mine={data.data.data.mine}
        />
        <p className="text-gray-700 text-lg mb-8">{data.data.data.content}</p>
        <div className="flex justify-end">
          <a
            href={data.data.data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
          >
            <img
              src={contactIcon}
              alt="Contact Icon"
              className="h-5 w-5 mr-2"
            />
            연락하기
          </a>
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default PostDetail;
