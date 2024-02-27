import React from "react";

function TypeSelector({ setSelectedType }) {
  const types = ["전체", "팀플", "스터디", "공모전"];
  return (
    <>
      <div className="flex justify-start mt-8 mb-2 max-sm:hidden">
        {types.map((type) => (
          <button
            className="px-6 py-2 text-2xl font-bold hover:text-blue-600 transition duration-300"
            onClick={() => {
              if (type === "전체") setSelectedType("all");
              else setSelectedType(type);
            }}
            key={type}
          >
            {type}
          </button>
        ))}
      </div>
      <select
        className="select select-bordered mt-8 md:hidden"
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {types.map((type) => (
          <option
            className="px-6 py-2 hover:text-blue-600 transition duration-300"
            value={type === "전체" ? "all" : type}
            key={type}
          >
            {type}
          </option>
        ))}
      </select>
    </>
  );
}

export default TypeSelector;
