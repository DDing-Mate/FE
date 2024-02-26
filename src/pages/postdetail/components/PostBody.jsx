import contactIcon from "../../../img/contact.png";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getPost } from "../../../api";
import Comments from "./Comments";
import { useCookies } from "react-cookie";
import PostInfo from "../components/PostInfo";
import PostButtons from "../components/PostButtons";

function PostBody({ cookies, postId }) {
  const { data } = useSuspenseQuery({
    queryFn: () => getPost({ id: postId, token: cookies.token }),
    queryKey: ["postDetail", postId],
  });

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg ">
      <div className="flex max-md:flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex-1 max-md:text-xl max-md:mb-0">
          {data.data.data.title}
        </h2>
        {data.data.data.mine && <PostButtons id={postId} />}
      </div>
      <PostInfo
        memberName={data.data.data.memberName}
        dueDate={data.data.data.dueDate}
        type={data.data.data.type}
        number={data.data.data.number}
        categories={data.data.data.categories}
        mine={data.data.data.mine}
      />
      <div dangerouslySetInnerHTML={{ __html: data.data.data.content }}></div>
      <div className="flex justify-end mb-10">
        <a
          href={data.data.data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
        >
          <img src={contactIcon} alt="Contact Icon" className="h-5 w-5 mr-2" />
          연락하기
        </a>
      </div>
      <Comments postId={postId} />
    </div>
  );
}

export default PostBody;
