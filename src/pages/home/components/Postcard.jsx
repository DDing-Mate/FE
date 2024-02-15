import React from "react";
import { Link } from "react-router-dom";
import truncate from "truncate";
import contact from "../../../img/contact.png";

function Postcard({ data }) {
  const {
    postId,
    memberName,
    title,
    content,
    category,
    type,
    dueDate,
    number,
    link,
  } = data || {};
  console.log(data);

  const truncatedContent = truncate(content, 15);

  // 연락 링크 이벤트 핸들러
  const handleContactClick = (e) => {
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 mx-auto my-8 max-w-xl">
      <Link to={`/post/${postId}`} className="block">
        <div className="flex justify-between items-center bg-blue-100 px-6 py-3">
          <span className="text-xs font-bold text-blue-800 bg-white rounded-full px-3 py-1">
            {type}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">마감일 |</span>
            <span className="text-sm text-gray-600">{dueDate}</span>
          </div>
        </div>
        <div className="px-5 pt-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{truncatedContent}</p>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-3">
            <span>{memberName}</span>
            <div className="flex items-center space-x-2">
              <span>모집 인원 |</span>
              <span>{number}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center p-3 space-x-4">
        <span className="text-blue-800 font-bold text-sm border border-blue-800 rounded-full px-3 py-1">
          {category}
        </span>
        <img
          src={contact}
          alt="Contact"
          className="w-5 h-5 cursor-pointer"
          onClick={handleContactClick}
        />
      </div>
    </div>
  );
}

export default Postcard;
