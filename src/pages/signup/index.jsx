import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../../components/input/Input";
function SignUp() {
  const navigate = useNavigate();
  const [visibile, setVisibile] = useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <form className="w-full flex flex-col items-center mt-5">
          <div className="w-full max-w-sm relative">
            <Input
              className="input border-2 border-red-300 w-96 mb-3"
              type="email"
              label={"이메일"}
              htmlFor={"email"}
              register={register}
            />
            <button
              type="button"
              className="btn btn-sm ml-2 absolute top-9 right-[-60px]"
              onClick={() => setVisibile(true)}
              disabled={visibile}
            >
              인증
            </button>
          </div>

          {visibile && (
            <div className="w-full max-w-sm relative">
              <Input
                className="input border-2 border-red-300 w-96 mb-3"
                label={"확인번호"}
                htmlFor={"emailConfirm"}
                register={register}
              />
              <button
                type="button"
                className="btn btn-sm ml-2 absolute top-9 right-[-60px]"
              >
                확인
              </button>
            </div>
          )}
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            type="password"
            label={"패스워드"}
            htmlFor={"password"}
            register={register}
          />
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            type="password"
            label={"패스워드 확인"}
            htmlFor={"passwordConfirm"}
            register={register}
          />
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            label={"닉네임"}
            htmlFor={"name"}
            register={register}
          />
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            type="text"
            label={"학번"}
            htmlFor={"studentId"}
            register={register}
          />
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            label={"한줄 소개"}
            htmlFor={"introduction"}
            register={register}
          />
          <button className="btn btn-wide mt-10">가입하기</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
