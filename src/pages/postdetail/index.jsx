import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import contactIcon from "../../img/contact.png";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api";
import Comments from "./Comments";

function PostDetail() {
  const { postId } = useParams();

  const post = {
    postId: 1,
    memberName: "명지인",
    title: "스터디 구합니다 !",
    content: `안녕하세요. 저는 융합소프트웨어학부 전공자고 이제 막 취준을 시작했습니다. 아직 어떻게 취준을 해야 할지 감이 잘 오지 않아서 저랑 비슷하신 분들이랑 함께 취준하면서 힘 얻고 싶어서 글 올려요. 상반기 취업은 실력상 조금 어려울 것 같아서 하반기 취업을 목표로 하고 있어요.
      🔔장소: 주로 온라인 (학교 주변/신촌/합정/홍대 오프라인 만남 가능)
      📢시간: 일주일에 한 번 온라인 모임 (시간은 추후 결정)
      
      가까우신 분들은 얼굴 보고 함께 코딩하면 좋을 것 같아요.
      합정/ 홍대에서 만날 수 있으신 분들 환영합니다!`,
    categories: ["Spring Boot", "React", "CS"],
    type: "스터디",
    dueDate: "2024-02-27",
    number: 4,
    link: "https://example.com",
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {post.title}
        </h2>

        <div className="mb-8 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 flex-wrap">
            <p className="text-md text-gray-500">
              작성자: <span className="font-semibold">{post.memberName}</span>
            </p>
            <p className="text-md text-gray-500">
              마감일: <span className="font-semibold">{post.dueDate}</span>
            </p>
            <p className="text-md text-gray-500">
              모집 구분: <span className="font-semibold">{post.type}</span>
            </p>
            <p className="text-md text-gray-500">
              모집 인원: <span className="font-semibold">{post.number}명</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mr-2"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-700 text-lg mb-8">{post.content}</p>
        <div className="flex justify-end">
          <a
            href={post.link}
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
