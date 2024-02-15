const posts = [
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
];

const studyPosts = [
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
    type: "스터디",
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
    type: "스터디",
    dueDate: "2024-02-27",
    number: 7,
    link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
  },
];
const teamPlayPosts = [
  {
    postId: 1,
    memberName: "명지인",
    title: "TEST_TITLE",
    content:
      "스터디구합니당아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    category: "Spring Boot",
    type: "팀플",
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
    type: "팀플",
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
    type: "팀플",
    dueDate: "2024-02-27",
    number: 7,
    link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
  },
];
const competitionPosts = [
  {
    postId: 1,
    memberName: "명지인",
    title: "TEST_TITLE",
    content:
      "스터디구합니당아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    category: "Spring Boot",
    type: "공모전",
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
    type: "공모전",
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
    type: "공모전",
    dueDate: "2024-02-27",
    number: 7,
    link: "https://secret-ceres-ea0.notion.site/e6327b895a5b4af9ab129c6f694cf8c1",
  },
];
const postDetail = {
  postId: 1,
  memberName: "명지인",
  title: "TEST_TITLE",
  content: `안녕하세요. 저는 융합소프트웨어학부 전공자고 이제 막 취준을 시작했습니다. 아직 어떻게 취준을 해야 할지 감이 잘 오지 않아서 저랑 비슷하신 분들이랑 함께 취준하면서 힘 얻고 싶어서 글 올려요. 상반기 취업은 실력상 조금 어려울 것 같아서 하반기 취업을 목표로 하고 있어요.
    🔔장소: 주로 온라인 (학교 주변/신촌/합정/홍대 오프라인 만남 가능)

    📢시간: 일주일에 한 번 온라인 모임 (시간은 추후 결정)

    가까우신 분들은 얼굴 보고 함께 코딩하면 좋을 것 같아요.
    합정/ 홍대에서 만날 수 있으신 분들 환영합니다!`,

  category: "Spring Boot",
  type: "스터디",
  dueDate: "2024-02-27",
  number: 4,
  link: "https://example.com",
};

export { posts, studyPosts, teamPlayPosts, competitionPosts, postDetail };
