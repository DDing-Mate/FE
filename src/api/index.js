import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export async function login(data) {
  console.log(data);
  return await api.post("api/account/login", data);
}

export async function confirmEmail(data) {
  return await api.post(`api/account/email?email=${data}`);
}

export async function confirmEmailCode({ email, code }) {
  console.log(email);
  console.log(code);
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
  return await api.patch("api/account/register", data, {
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

export async function getPosts() {
  return await api.get("api/post/all");
}

export async function getPost(id) {
  return await api.get(`api/post/${id}`);
}

export async function getTypePosts(type) {
  return await api.get(`api/post/type=${type}`);
}

export async function getCategoryPosts(category) {
  return await api.get(`api/post/category=${category}`);
}

export async function postComment(data) {
  return await api.post("api/comment", data);
}

export async function getComment(id) {
  return await api.get(`api/comment/byPost${id}`);
}

export async function getMajor({ major }) {
  console.log(major);
  return await api.get(`/api/account/major?univ=${major}`);
}

export async function getUnviersity() {
  return await api.get("api/account/univ");
}
