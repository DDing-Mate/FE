import { HttpResponse, http } from "msw";
import posts from "./dummy";
export const handlers = [
  http.get("http://api.example.com/post/all", () => {
    return HttpResponse.json(posts);
  }),
];
