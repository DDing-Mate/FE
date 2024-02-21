import { useQuery } from "@tanstack/react-query";
import Input from "../../../components/input/Input";
import MultipleSelect from "../../../components/input/MultipleSelect";
import { getMajor, getUnviersity } from "../../../api";
import { useEffect, useState } from "react";
import Select from "../../../components/input/Select";
const options = [
  "언어",
  "역사",
  "철학",
  "문화",
  "법",
  "교육",
  "경제",
  "프로그래밍",
  "과학",
  "기계",
];
const unviersity = [
  "ICT융합대학",
  "인문대학",
  "사회과학대학",
  "경영대학",
  "법과대학",
  "미래융합대학",
  "자연과학대학",
  "공과대학",
  "예술체육대학",
  "건축대학",
  "방목기초교육대학",
  "국제학부",
];
function SetProfile({ register, watch, setValue }) {
  const [selectUniversity, setSelectUniversity] = useState(unviersity[0]);
  const { data, isSuccess, refetch } = useQuery({
    queryFn: () => getMajor({ major: selectUniversity }),
    queryKey: ["major"],
  });
  const [major, setMajor] = useState([]);
  useEffect(() => {
    refetch();
  }, [selectUniversity]);
  useEffect(() => {
    if (isSuccess) setMajor(data?.data.data);
  }, [data]);

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
      <Select
        className="select input-bordered w-96 mb-3"
        options={unviersity}
        label={"대학"}
        htmlFor={"university"}
        onChange={(e) => {
          setSelectUniversity(e.target.value);
        }}
      />
      <Select
        className="select input-bordered w-96 mb-3"
        type="text"
        label={"전공"}
        htmlFor={"major"}
        options={major}
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
      <MultipleSelect
        options={options}
        label={"카테고리"}
        htmlFor={"categories"}
        setValue={setValue}
        watch={watch}
        {...register("categories")}
      />
    </>
  );
}

export default SetProfile;
