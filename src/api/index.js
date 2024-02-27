import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-52-78-106-209.ap-northeast-2.compute.amazonaws.com:8080",
  withCredentials: true,
});

export async function login(data) {
  return await api.post("api/account/login", data);
}

export async function confirmEmail(data) {
  return await api.post(`api/account/email?email=${data}`);
}

export async function confirmEmailCode({ email, code }) {
  return await api.post(`api/account/email/auth?email=${email}&code=${code}`);
}

export async function getMember(token) {
  return await api.get("api/member", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
export async function postMember(data) {
  return await api.post("api/account/register", data);
}

export async function patchMember({ data, token }) {
  return await api.patch("api/member", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function deleteMember({ data, token }) {
  return await api.delete("api/account/register", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function postPost({ data, token }) {
  return await api.post("api/post", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getPosts({ token }) {
  return await api.get("api/post/all");
}

export async function getPost({ id, token }) {
  if (token) {
    return await api.get(`api/post/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } else {
    return await api.get(`api/post/${id}`, {
      headers: {
        Authorization: "Bearer " + "notLogIn",
      },
    });
  }
}
export async function patchPost({ id, data, token }) {
  return await api.patch(`api/post/${id}`, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function deletePost({ id, token }) {
  return await api.delete(`api/post/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function zzimPost({ id, token }) {
  return await api.post(`api/mark/${id}`, id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getZZim(token) {
  return await api.get("api/post/mark", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getTypePosts(type) {
  return await api.get(`api/post/type/${type}`);
}

export async function getCategoryPosts(category) {
  return await api.get(`api/post/category=${category}`);
}

export async function postComment({ data, token }) {
  return await api.post("api/comment", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getComment({ id, token }) {
  return await api.get(`api/comment/byPost/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function deleteComment({ id, token }) {
  return await api.delete(`api/comment/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
//
export async function patchComment({ id, content, token }) {
  return await api.patch(
    `api/comment/${id}?content=${encodeURIComponent(content)}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}
export async function getMajor({ major }) {
  return await api.get(`/api/account/major?univ=${major}`);
}

export async function getUnviersity() {
  return await api.get("api/account/univ");
}
