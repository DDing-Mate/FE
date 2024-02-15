import React, { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  return (
    <div>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="댓글을 입력하세요."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleAddComment}
        >
          댓글 추가
        </button>
      </div>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded mt-2">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
