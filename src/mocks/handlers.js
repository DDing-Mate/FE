import { HttpResponse, http } from "msw";
import { postDetail, posts } from "./dummy";
export const handlers = [
  http.get("http://api.example.com/post/all", () => {
    return HttpResponse.json(posts);
  }),
  http.get("http://api.example.com/post/*", () => {
    return HttpResponse.json(postDetail);
  }),
  http.get("http://api.example.com/post/type=*", () => {
    return HttpResponse.json();
  }),
];
