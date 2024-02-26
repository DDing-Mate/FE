import { useQuery, useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm";
import { useNavigate, useParams } from "react-router-dom";
import withAuth from "../../hocs/withAuth";
import { getPost, patchPost, postPost } from "../../api";
import { useCookies } from "react-cookie";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
function Post() {
  const { postId } = useParams();
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryFn: () => getPost({ id: postId, token: cookies.token }),
    queryKey: ["postDetail", postId],
  });

  const postMutation = useMutation({
    mutationFn: postPost,
    mutationKey: ["postPost"],
  });

  const patchMutation = useMutation({
    mutationFn: patchPost,
    mutationKey: ["postPost"],
  });

  const postSubmit = (data) => {
    postMutation.mutate(
      { data: data, token: cookies.token },
      {
        onSuccess: (res) => {
          navigate("/");
        },
        onError: (err) => {
          toast.error("전송을 실패했습니다!");
        },
      }
    );
  };

  const patchSubmit = (data) => {
    patchMutation.mutate(
      { id: postId, data: data, token: cookies.token },
      {
        onSuccess: (res) => {
          queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
          navigate(`/post/${postId}`);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  if (!postId) return <PostForm api={postSubmit} />;
  if (isSuccess && postId)
    return <PostForm defaultData={data.data.data} api={patchSubmit} />;
}

export default withAuth(Post);
