import { useQuery } from "@tanstack/react-query";
import Input from "../../../components/input/Input";
import MultipleSelect from "../../../components/input/MultipleSelect";
import MajorInput from "../../../components/input/MajorInput";
import ErrorMessage from "../../../components/input/message/ErrorMessage";

function SetProfile({ register, watch, setValue, errors }) {
  const dateRegex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);

  return (
    <>
      <Input
        className="input input-bordered w-96 mb-3 max-sm:w-80"
        label={"닉네임"}
        htmlFor={"name"}
        {...register("name", { required: "true" })}
      />
      <Input
        className="input input-bordered w-96 mb-3 max-sm:w-80"
        type="number"
        label={"학번"}
        htmlFor={"studentId"}
        {...register("studentId", {
          required: "true",
          valueAsNumber: true,
        })}
      />
      <MajorInput watch={watch} register={register} />
      <Input
        className="input input-bordered w-96 mb-3 max-sm:w-80"
        type="text"
        label={"생년월일"}
        htmlFor={"birth"}
        placeholder={"YYYY-MM-DD"}
        {...register("birth", {
          required: "true",
          pattern: dateRegex,
        })}
      />
      <ErrorMessage errors={errors?.birth} />
      <MultipleSelect
        label={"카테고리"}
        htmlFor={"categories"}
        setValue={setValue}
        watch={watch}
        {...register("categories")}
      />
      <Input
        className="input input-bordered w-96 mb-3 max-sm:w-80"
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
