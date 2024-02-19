import Header from "../../components/Header";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import DateInput from "../../components/input/DateInput";
function MyPage() {
  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      name: "정승연",
      major: "응용소프트웨어",
      studentId: "60201706",
      birth: "2005-01-01",
      introduction: "총대는 제가 메겠습니다",
    },
  });
  return (
    <>
      <Header />
      <form className="w-1/4 m-auto mt-20 flex flex-col items-center">
        <h1 className="text-2xl font-bold">정승연님 안녕하세요!</h1>
        <Input
          className="input border-2 border-red-300 w-96 mb-3"
          htmlFor={"name"}
          label={"이름"}
          {...register("name")}
        />
        <Input
          className="input border-2 border-red-300 w-96 mb-3"
          htmlFor={"studentId"}
          label={"학번"}
          {...register("studentId")}
        />
        <Input
          className="input border-2 border-red-300 w-96 mb-3"
          htmlFor={"major"}
          label={"전공"}
          {...register("major")}
        />
        <DateInput
          htmlFor={"birth"}
          label={"생년월일"}
          watch={watch}
          setValue={setValue}
          {...register("birth")}
        />
        <Input
          className="input border-2 border-red-300 w-96 mb-3"
          htmlFor={"introduction"}
          label={"한줄 소개"}
          {...register("introduction")}
        />
        <button className="bg-red-300 p-3 w-96 rounded-lg text-white mt-10 hover:bg-red-500">
          프로필 저장
        </button>
      </form>
    </>
  );
}

export default MyPage;
