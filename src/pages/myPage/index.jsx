import Header from "../../components/Header";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import DateInput from "../../components/input/DateInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMember, patchMember } from "../../api";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import MajorInput from "../../components/input/MajorInput";
import MultipleSelect from "../../components/input/MultipleSelect";

function MyPage() {
  const { register, handleSubmit, control, watch, setValue, reset, getValues } =
    useForm();
  const [cookies] = useCookies();
  const [isReset, setIsReset] = useState(false);
  const { data, isSuccess, isLoading } = useQuery({
    queryFn: () => getMember(cookies.token),
    queryKey: ["member"],
  });

  const { mutate } = useMutation({
    mutationFn: patchMember,
    mutationKey: ["editMember"],
  });

  const editMember = () => {
    console.log(getValues());
    console.log(cookies.token);
    mutate(
      { data: getValues(), token: cookies.token },
      {
        onSuccess: (res) => {
          window.location.reload();
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data.data.data);
      reset(data.data.data);
      setIsReset(true);
    }
  }, [isLoading]);
  if (isLoading) return null;
  if (isReset)
    return (
      <>
        <Header />
        <form
          className="w-1/4 m-auto mt-20 flex flex-col items-center"
          onSubmit={handleSubmit(editMember)}
        >
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
          <MajorInput watch={watch} register={register} />
          <Input
            className="input input-bordered w-96 mb-3"
            type="text"
            label={"생년월일"}
            htmlFor={"birth"}
            placeholder={"YYYYMMDD"}
            {...register("birth", { required: "생일을 입력해주세요" })}
          />
          <MultipleSelect
            label={"카테고리"}
            htmlFor={"categories"}
            setValue={setValue}
            watch={watch}
            {...register("categories")}
          />
          <Input
            className="input border-2 border-red-300 w-96 mb-3"
            htmlFor={"introduction"}
            label={"한줄 소개"}
            {...register("introduction")}
          />
          <button
            type="submit"
            className="bg-red-300 p-3 w-96 rounded-lg text-white mt-10 hover:bg-red-500"
          >
            프로필 저장
          </button>
        </form>
      </>
    );
}

export default MyPage;
