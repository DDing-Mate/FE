import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment, getComment } from "../../../api";
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
    mutationKey: ["postComment"],
    mutationFn: (newComment) => postComment(newComment, cookies.token),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },

    onError: (error) => {
      console.error("댓글 오류 발생:", error.response);
    },
  });

  const onSubmit = (data) => {
    postCommentMutation.mutate({
      data: {
        postId: postId,
        content: data.comment,
      },
      token: cookies.token,
    });
    reset({ comment: "" });
  };

  if (commentsQuery.isLoading) return <div>Loading...</div>;
  if (commentsQuery.error)
    return <div>Error: {commentsQuery.error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <textarea
          {...register("comment", { required: true })}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="댓글을 입력하세요."
        ></textarea>
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
        {commentsQuery.data.length > 0 ? (
          commentsQuery.data.map((comment) => (
            <div key={comment.commentId} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{comment.content}</p>
              <p className="text-sm text-gray-600 mt-2">
                작성자: {comment.writer}
              </p>
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
