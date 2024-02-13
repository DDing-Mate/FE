import Header from "../../components/Header";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import MultipleSelect from "../../components/input/MultipleSelect";
import DateInput from "../../components/input/DateInput";
import { useForm } from "react-hook-form";
function Post() {
  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      type: "",
      number: "",
      category: [],
      duedate: "",
      contact: "",
      link: "",
      title: "",
    },
  });
  return (
    <>
      <Header />
      <div className="max-w-5xl m-auto pt-10">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <h1 className="text-2xl font-bold mb-5 pb-1 border-b-2 border-red-300">
            프로젝트의 기본 정보를 입력해주세요
          </h1>
          <div className="flex">
            <Select
              className="input border-2 border-red-300 w-96 mb-3 mr-12"
              options={["팀플", "스터디", "공모전"]}
              label={"모집유형"}
              placeHolder={"팀플/스터디/공모전"}
              register={register}
              htmlFor={"type"}
              setValue={setValue}
            />
            <Select
              className="input border-2 border-red-300 w-96 mb-3"
              options={["1", "2", "3", "4", "5"]}
              label={"모집인원"}
              placeHolder={"인원수"}
              register={register}
              htmlFor={"number"}
              setValue={setValue}
            />
          </div>
          <div className="flex">
            <MultipleSelect
              label={"카테고리"}
              register={register}
              htmlFor={"category"}
              watch={watch}
              setValue={setValue}
            />
            <div className="ml-12">
              <DateInput
                register={register}
                htmlFor={"duedate"}
                control={control}
                watch={watch}
                setValue={setValue}
              />
            </div>
          </div>
          <div>
            <Select
              className="input border-2 border-red-300 w-96 mb-3"
              options={["오픈톡", "구글폼", "이메일"]}
              label={"연락방법"}
              placeHolder={"연락방법"}
              register={register}
              htmlFor={"contact"}
              setValue={setValue}
            />
            <Input
              className="input border-2 border-red-300 w-96 mb-3"
              placeholder={"이메일/카카오톡 링크/ 구글 폼 "}
              register={register}
              htmlFor={"link"}
            />
          </div>
          <h2 className="text-2xl font-bold mb-5 pb-1 border-b-2 border-red-300">
            프로젝트에 대해 소개해주세요
          </h2>
          <Input
            label={"제목"}
            className="input border-2 border-red-300 w-[600px] mb-3"
            placeholder="글 제목을 입력해주세요"
            register={register}
            htmlFor={"title"}
          />
          <button className="border-2 bg-black text-white w-24 rounded-lg p-3 float-right hover:bg-slate-400 ">
            글 등록
          </button>
        </form>
      </div>
    </>
  );
}

export default Post;
