import Input from "../../../components/input/Input";
function PasswordConfirm({ register }) {
  return (
    <>
      <Input
        className="input input-bordered w-96 mb-3"
        type="password"
        label={"패스워드"}
        htmlFor={"password"}
        {...register("password", {
          required: "비밀번호를 입력해주세요",
        })}
      />
      <Input
        className="input input-bordered w-96 mb-3"
        type="password"
        label={"패스워드 확인"}
        htmlFor={"passwordCheck"}
        {...register("passwordCheck", {})}
      />
    </>
  );
}

export default PasswordConfirm;
