import React, { useState, useEffect } from "react";
import Postcard from "./Postcard";

function PostcardsContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setPosts([
          // 예시 데이터
          {
            postId: 1,
            memberName: "명지인",
            title: "TEST_TITLE",
            content:
              "스터디구합니당아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
            category: "Spring Boot",
            type: "스터디",
            dueDate: "2024-02-27",
            number: 4,
            link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
          },
          {
            postId: 2,
            memberName: "명지인2",
            title: "TEST",
            content: "TEST_CONTENT",
            category: "React",
            type: "프로젝트",
            dueDate: "2024-02-27",
            number: 7,
            link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
          },
          {
            postId: 3,
            memberName: "명지인3",
            title: "TEST",
            content: "TEST_CONTENT",
            category: "React",
            type: "프로젝트",
            dueDate: "2024-02-27",
            number: 7,
            link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
          },
        ]);
      }, 500);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap -m-4">
      {posts.map((post) => (
        <div
          key={post.postId}
          className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <Postcard data={post} />
        </div>
      ))}
    </div>
  );
}

export default PostcardsContainer;
