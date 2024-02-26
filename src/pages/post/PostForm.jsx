import Header from "../../components/Header";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import MultipleSelect from "../../components/input/MultipleSelect";
import DateInput from "../../components/input/DateInput";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PostForm({ defaultData, api }) {
  const { register, handleSubmit, watch, setValue, reset, getValues } = useForm(
    {
      defaultValues: {
        type: "",
        number: "",
        categories: [],
        dueDate: "",
        link: "",
        title: "",
        content: "",
      },
    }
  );

  useEffect(() => {
    if (defaultData) {
      reset(defaultData);
      setValue("content", getValues("content"));
    }
  }, [defaultData]);
  return (
    <>
      <Header />
      <div className="max-w-5xl m-auto pt-10">
        <form onSubmit={handleSubmit(api)}>
          <h1 className="text-2xl font-bold mb-5 border-b-2 border-slate-300 max-md:text-lg max-md:mx-3">
            프로젝트의 기본 정보를 입력해주세요
          </h1>
          <div className="flex max-md:flex-col max-lg:items-center">
            <Select
              className="input input-bordered w-96 mb-3 mr-12 max-md:w-80 max-md:mr-0"
              options={["팀플", "스터디", "공모전"]}
              label={"모집유형"}
              placeHolder={"팀플/스터디/공모전"}
              htmlFor={"type"}
              {...register("type")}
            />
            <Select
              className="input input-bordered w-96 mb-3 max-md:w-80 "
              options={["1", "2", "3", "4", "5"]}
              label={"모집인원"}
              placeHolder={"인원수"}
              htmlFor={"number"}
              {...register("number", {
                valueAsNumber: true,
              })}
            />
          </div>
          <div className="flex max-md:flex-col max-md:items-center">
            <MultipleSelect
              label={"카테고리"}
              htmlFor={"category"}
              watch={watch}
              setValue={setValue}
              {...register("categories")}
            />
            <div className="ml-12 max-md:ml-0">
              <DateInput
                htmlFor={"dueDate"}
                label={"마감일"}
                watch={watch}
                setValue={setValue}
                {...register("dueDate")}
              />
            </div>
          </div>
          <div className="mb-10 max-md:flex max-md:flex-col max-md:items-center">
            <Select
              className="input input-bordered w-96 mb-3 max-md:w-80"
              options={["오픈톡", "구글폼", "이메일"]}
              label={"연락방법"}
              placeHolder={"연락방법"}
              htmlFor={"contact"}
            />
            <Input
              className="input input-bordered w-96 mb-3 max-md:w-80"
              placeholder={"이메일/카카오톡 링크/ 구글 폼 "}
              htmlFor={"link"}
              {...register("link")}
            />
          </div>
          <h2 className="text-2xl font-bold mb-5 pb-1 border-b-2 border-slate-300 max-md:text-lg max-md:mx-3">
            프로젝트에 대해 소개해주세요
          </h2>
          <div className="max-md:flex max-md:flex-col max-md:ml-5">
            <Input
              label={"제목"}
              className="input input-bordered w-[600px] mb-3 max-md:w-80"
              placeholder="글 제목을 입력해주세요"
              {...register("title")}
              htmlFor={"title"}
            />
            <ReactQuill
              style={{ width: "90%", height: "400px" }}
              onChange={(value) => {
                setValue("content", value);
              }}
              value={getValues("content")}
            />
          </div>
          <button className="my-20 border-2 mr-5 bg-black text-white w-24 rounded-lg p-3 float-right hover:bg-slate-400 ">
            {defaultData ? "글 수정" : "글 등록"}
          </button>
        </form>
      </div>
    </>
  );
}

export default PostForm;
