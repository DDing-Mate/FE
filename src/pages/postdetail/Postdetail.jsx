import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import contactIcon from "../../img/contact.png";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api";

function PostDetail() {
  const { postId } = useParams();
  console.log(postId);
  const { data, error } = useQuery({
    queryKey: ["postDetail"],
    queryFn: getPost,
  });
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          {data?.data.title}
        </h2>
        <hr className="border-gray-300 mb-8" />
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-lg text-gray-700">
            <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
              <p className="font-semibold text-xl">
                <span className="text-gray-600">작성자:</span>{" "}
                <span className="text-gray-900">{data?.data.memberName}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">마감일:</span>{" "}
                <span className="text-gray-900">{data?.data.dueDate}</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <p className="font-semibold text-xl">
                <span className="text-gray-600">카테고리:</span>{" "}
                <span className="text-gray-900">{data?.data.category}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">모집 구분:</span>{" "}
                <span className="text-gray-900">{data?.data.type}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">모집 인원:</span>{" "}
                <span className="text-gray-900">{data?.data.number} 명</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-800 text-lg mb-12 whitespace-pre-line">
          {data?.data.content}
        </p>
        <hr className="border-gray-300 mt-12 mb-8" />
        <div className="flex items-center justify-center md:justify-end">
          <a
            href={data?.data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-800 transition-colors duration-200"
          >
            <img
              src={contactIcon}
              alt="Contact Icon"
              className="h-6 w-6 mr-2"
            />
            <span className="text-lg font-semibold">연락하기</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
