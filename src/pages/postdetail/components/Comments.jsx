import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment, getComment, deleteComment } from "../../../api";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

function Comments({ postId }) {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["token"]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const commentsQuery = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const response = await getComment({ id: postId, token: cookies.token });
      return response.data.data || [];
    },
  });

  const postCommentMutation = useMutation({
    mutationFn: (newComment) => postComment(newComment, cookies.token),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
    onError: (error) => {
      console.error("댓글 오류 발생:", error.response);
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: ({ commentId, token }) =>
      deleteComment({ id: commentId, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
    onError: (error) => {
      console.error("댓글 삭제 오류 발생:", error.response);
    },
  });

  const handleDelete = (commentId) => {
    deleteCommentMutation.mutate({ commentId, token: cookies.token });
  };

  const onSubmit = (data) => {
    postCommentMutation.mutate({
      data: { postId, content: data.comment },
      token: cookies.token,
    });
    reset();
  };

  if (commentsQuery.isLoading) return <div>Loading...</div>;
  if (commentsQuery.isError)
    return <div>Error: {commentsQuery.error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <textarea
          {...register("comment", { required: true })}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="댓글을 입력하세요."
        />
        {errors.comment && (
          <p className="text-red-500 text-sm mt-2">댓글을 입력해주세요.</p>
        )}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          댓글 추가
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {commentsQuery.data?.length > 0 ? (
          commentsQuery.data.map((comment) => (
            <div key={comment.commentId} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{comment.content}</p>
              {!comment.deleted && (
                <p className="text-sm text-gray-600 mt-2">
                  작성자: {comment.writer}
                </p>
              )}
              {comment.mine && !comment.deleted && (
                <button
                  onClick={() => handleDelete(comment.commentId)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  삭제
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="text-gray-500">댓글이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Comments;
