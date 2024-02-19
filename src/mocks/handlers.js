import { HttpResponse, http } from "msw";
import { postDetail, posts } from "./dummy";
export const handlers = [
  http.post("http://api.example.com/account/login", async ({ request }) => {
    const { email, password } = await request.json();
    console.log(email);

    if (email === "testuser" && password === "testpassword") {
      return HttpResponse.json(
        {
          token: "fake_token",
        },
        { status: 201 }
      );
    } else {
      return HttpResponse.json(
        {
          errorMessage: "Not Authorized",
        },
        { status: 401 }
      );
    }
  }),
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
