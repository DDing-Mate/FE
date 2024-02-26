import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postComment,
  getComment,
  deleteComment,
  patchComment,
} from "../../../api";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

function Comments({ postId }) {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["token"]);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editContent, setEditContent] = useState("");

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
  });

  const editCommentMutation = useMutation({
    mutationFn: ({ id, content }) =>
      patchComment({ id, content, token: cookies.token }),
    onSuccess: () => {
      setEditingCommentId(null);
      queryClient.invalidateQueries(["comments", postId]);
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: ({ commentId, token }) =>
      deleteComment({ id: commentId, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
  const handleDelete = (commentId) => {
    deleteCommentMutation.mutate({ commentId, token: cookies.token });
  };
  const onSubmit = (data) => {
    if (editingCommentId) {
      editCommentMutation.mutate({
        id: editingCommentId,
        content: editContent,
      });
    } else {
      postCommentMutation.mutate({
        data: { postId, content: data.comment },
        token: cookies.token,
      });
    }
    reset();
    setEditingCommentId(null);
    setEditContent("");
  };

  const startEditing = (id, content) => {
    setEditingCommentId(id);
    setEditContent(content);
    setValue("comment", content);
  };

  if (commentsQuery.isLoading) return <div>Loading...</div>;
  if (commentsQuery.isError)
    return <div>Error: {commentsQuery.error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
        <textarea
          {...register("comment", { required: true })}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="댓글을 입력하세요."
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          {editingCommentId ? "수정 완료" : "댓글 추가"}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {commentsQuery.data?.map((comment) => (
          <div key={comment.commentId} className="bg-gray-100 p-4 rounded-lg">
            {editingCommentId === comment.commentId ? (
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="text-gray-800">{comment.content}</p>
            )}
            {!comment.deleted && (
              <p className="text-sm text-gray-600 mt-2">
                작성자: {comment.writer}
              </p>
            )}
            {comment.mine && !comment.deleted && (
              <>
                {editingCommentId === comment.commentId ? (
                  <button
                    onClick={() =>
                      editCommentMutation.mutate({
                        id: editingCommentId,
                        content: editContent,
                      })
                    }
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    수정 완료
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      startEditing(comment.commentId, comment.content)
                    }
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    수정
                  </button>
                )}
                <button
                  onClick={() => handleDelete(comment.commentId)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  삭제
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
