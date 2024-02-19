import React from "react";
import { useForm } from "react-hook-form";

function Comments() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [comments, setComments] = React.useState([]);

  const onSubmit = (data) => {
    setComments([...comments, data.comment]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <textarea
          {...register("comment", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="댓글을 입력하세요."
        />
        {errors.comment && <p className="text-red-500">댓글을 입력해주세요.</p>}
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          댓글 추가
        </button>
      </form>
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
