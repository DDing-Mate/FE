import Header from "../../components/Header";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import DateInput from "../../components/input/DateInput";
import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../api";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
function MyPage() {
  const { register, handleSubmit, control, watch, setValue, reset } = useForm();
  const [cookies] = useCookies();
  const { data, isSuccess } = useQuery({
    queryFn: () => getMember(cookies.token),
    queryKey: ["member"],
  });

  useEffect(() => {
    if (isSuccess) reset(data?.data.data);
    console.log(data?.data.data);
  }, [data]);

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
          type="number"
          {...register("studentId", { valueAsNumber: true })}
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
