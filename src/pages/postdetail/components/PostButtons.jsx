import { useMutation } from "@tanstack/react-query";
import { deletePost, patchPost } from "../../../api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function PostButtons({ id }) {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  console.log(cookies.token);

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    mutationKey: ["deletePost"],
  });

  const handleDelete = () => {
    deleteMutation.mutate(
      { id: id, token: cookies.token },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <div className="">
      <button
        type="button"
        className="mx-2 text-blue-400 rounded-lg p-2 hover:underline max-md:mx-0 max-md:p-0"
        onClick={() => navigate(`/edit/${id}`)}
      >
        수정
      </button>
      <button
        type="button"
        className=" text-red-400 rounded-lg p-2 hover:underline"
        onClick={() => handleDelete()}
      >
        삭제
      </button>
    </div>
  );
}

export default PostButtons;
