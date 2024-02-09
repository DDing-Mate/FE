function Postcard({ data }) {
  return (
    <a
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 mx-auto my-8 max-w-xl block"
      href="https://example.com"
    >
      <div className="flex justify-between items-center bg-blue-100 px-6 py-3">
        <span className="text-xs font-bold text-blue-800 bg-white rounded-full px-3 py-1">
          스터디
        </span>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">마감일 |</span>
          <span className="text-sm text-gray-600">2024.02.21</span>
        </div>
      </div>

      <div className="px-5 pt-5 pb-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          같이 개발자 취준하실분 ! (코테, CS 공부, 면접 대비, 자소서)
        </h3>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>명지인</span>
          <div className="flex items-center space-x-2">
            <span>모집 인원 |</span>
            <span>10</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-3 space-x-4">
        <span className="text-blue-800 font-bold text-sm border border-blue-800 rounded-full px-3 py-1">
          CS
        </span>
        <span className="text-blue-800 font-bold text-sm border border-blue-800 rounded-full px-3 py-1">
          코테
        </span>
      </div>
    </a>
  );
}

export default Postcard;
