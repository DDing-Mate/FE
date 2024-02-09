import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  return (
    <Modal closeModal={() => navigate(-1)}>
      <div className="modal-box w-[600px]">
        <h3 className="font-bold text-lg">로그인</h3>
        <div className="modal-action w-full float-left">
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <Input
              label={"이메일"}
              placeholder={"123@mju.ac.kr"}
              htmlFor={"email"}
              register={register}
            />
            <Input
              label={"비밀번호"}
              type="password"
              htmlFor={"password"}
              register={register}
            />
            <button className="btn btn-wide mb-3">로그인</button>
            <Link
              to={"/signup"}
              className="text-red-500 cursor-pointer hover:underline"
            >
              아직 회원이 아니신가요? 회원가입하러 가기
            </Link>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
