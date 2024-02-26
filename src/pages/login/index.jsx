import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
function Login() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({ mutationFn: login, mutationKey: ["login"] });
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        setCookie("token", data.data.data.token);
        window.location.reload();
      },
      onError: (err) => {
        if (err.response.status === 404)
          toast.error("아이디 혹은 비밀번호가 일치하지 않습니다");
      },
    });
  };
  return (
    <div className="modal-box w-[600px] max-md:w-96">
      <h3 className="font-bold text-lg">로그인</h3>
      <div className="modal-action w-full float-left">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <Input
            className="input input-bordered w-96 mb-3 max-md:w-80"
            label={"이메일"}
            placeholder={"123@mju.ac.kr"}
            htmlFor={"email"}
            {...register("email")}
          />
          <Input
            className="input input-bordered w-96 mb-3 max-md:w-80"
            label={"비밀번호"}
            type="password"
            htmlFor={"password"}
            {...register("password")}
          />
          <button className="btn btn-wide my-6">로그인</button>
          <Link
            to={"/signup"}
            className="text-red-500 cursor-pointer hover:underline"
          >
            아직 회원이 아니신가요? 회원가입하러 가기
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
