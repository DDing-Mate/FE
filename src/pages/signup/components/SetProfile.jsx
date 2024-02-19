import Input from "../../../components/input/Input";
import MultipleSelect from "../../../components/input/MultipleSelect";
function SetProfile({ register, watch, setValue }) {
  return (
    <>
      <Input
        className="input input-bordered w-96 mb-3"
        label={"닉네임"}
        htmlFor={"name"}
        {...register("name", { required: "이름을 입력해주세요" })}
      />
      <Input
        className="input input-bordered w-96 mb-3"
        type="number"
        label={"학번"}
        htmlFor={"studentId"}
        {...register("studentId", {
          required: "학번을 입력해주세요",
          valueAsNumber: true,
        })}
      />
      <Input
        className="input input-bordered w-96 mb-3"
        type="text"
        label={"전공"}
        htmlFor={"major"}
        {...register("major", { required: "전공을 입력해주세요" })}
      />
      <Input
        className="input input-bordered w-96 mb-3"
        type="text"
        label={"생년월일"}
        htmlFor={"birth"}
        placeholder={"YYYYMMDD"}
        {...register("birth", { required: "생일을 입력해주세요" })}
      />
      <Input
        className="input input-bordered w-96 mb-3"
        label={"한줄 소개"}
        htmlFor={"introduction"}
        {...register("introduction", {
          required: "한줄 소개를 입력해주세요",
        })}
      />
    </>
  );
}

export default SetProfile;
