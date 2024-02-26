function PostInfo({ memberName, dueDate, type, number, categories }) {
  return (
    <div className="mb-8 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4 flex-wrap max-md:space-x-0">
        <div className="text-md text-gray-500 max-md:mr-5 max-md:text-sm">
          <p>
            작성자: <span className="font-semibold">{memberName}</span>
          </p>
          <p>
            마감일: <span className="font-semibold">{dueDate}</span>
          </p>
        </div>
        <div className="text-md text-gray-500 max-md:text-sm">
          <p>
            모집 구분: <span className="font-semibold">{type}</span>
          </p>
          <p>
            모집 인원: <span className="font-semibold">{number}명</span>
          </p>
        </div>
      </div>
      {categories !== null ? (
        <div className="mt-4 md:mt-0">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mr-2"
            >
              {category}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default PostInfo;
