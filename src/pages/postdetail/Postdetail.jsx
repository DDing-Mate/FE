import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import contactIcon from "../../img/contact.png";

function PostDetail() {
  const { postId } = useParams();

  const post = {
    postId: 1,
    memberName: "명지인",
    title: "TEST_TITLE",
    content: `안녕하세요. 저는 융합소프트웨어학부 전공자고 이제 막 취준을 시작했습니다. 아직 어떻게 취준을 해야 할지 감이 잘 오지 않아서 저랑 비슷하신 분들이랑 함께 취준하면서 힘 얻고 싶어서 글 올려요. 상반기 취업은 실력상 조금 어려울 것 같아서 하반기 취업을 목표로 하고 있어요.
    🔔장소: 주로 온라인 (학교 주변/신촌/합정/홍대 오프라인 만남 가능)

    📢시간: 일주일에 한 번 온라인 모임 (시간은 추후 결정)
    
    가까우신 분들은 얼굴 보고 함께 코딩하면 좋을 것 같아요.
    합정/ 홍대에서 만날 수 있으신 분들 환영합니다!`,

    category: "Spring Boot",
    type: "스터디",
    dueDate: "2024-02-27",
    number: 4,
    link: "https://example.com",
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          {post.title}
        </h2>
        <hr className="border-gray-300 mb-8" />
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-lg text-gray-700">
            <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
              <p className="font-semibold text-xl">
                <span className="text-gray-600">작성자:</span>{" "}
                <span className="text-gray-900">{post.memberName}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">마감일:</span>{" "}
                <span className="text-gray-900">{post.dueDate}</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <p className="font-semibold text-xl">
                <span className="text-gray-600">카테고리:</span>{" "}
                <span className="text-gray-900">{post.category}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">모집 구분:</span>{" "}
                <span className="text-gray-900">{post.type}</span>
              </p>
              <p className="font-semibold text-xl">
                <span className="text-gray-600">모집 인원:</span>{" "}
                <span className="text-gray-900">{post.number} 명</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-800 text-lg mb-12 whitespace-pre-line">
          {post.content}
        </p>
        <hr className="border-gray-300 mt-12 mb-8" />
        <div className="flex items-center justify-center md:justify-end">
          <a
            href={post.link}
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
