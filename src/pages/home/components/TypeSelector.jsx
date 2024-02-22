import React from "react";

function TypeSelector({ setSelectedType }) {
  return (
    <div className="flex justify-start mt-8 mb-2">
      <button
        className="px-6 py-2 text-2xl font-bold hover:text-blue-600 transition duration-300"
        onClick={() => setSelectedType("all")}
      >
        전체
      </button>
      <button
        className="ml-3 px-6 py-2 text-2xl font-bold hover:text-green-600 transition duration-300"
        onClick={() => setSelectedType("팀플")}
      >
        팀플
      </button>
      <button
        className="ml-3 px-6 py-2 text-2xl font-bold hover:text-yellow-600 transition duration-300"
        onClick={() => setSelectedType("스터디")}
      >
        스터디
      </button>
      <button
        className="ml-3 px-6 py-2 text-2xl font-bold hover:text-red-600 transition duration-300"
        onClick={() => setSelectedType("공모전")}
      >
        공모전
      </button>
    </div>
  );
}

export default TypeSelector;
