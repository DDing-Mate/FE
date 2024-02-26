import Select from "./Select";
import { useEffect, useState } from "react";
import { getMajor } from "../../api";
import { useQuery } from "@tanstack/react-query";
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
function MajorInput({ watch, register, ...rest }) {
  const univ = watch("univ");
  const maj = watch("major");
  console.log(univ);
  const { data, isSuccess, refetch } = useQuery({
    queryFn: () => getMajor({ major: univ }),
    queryKey: ["major"],
  });
  const [major, setMajor] = useState([]);

  useEffect(() => {
    refetch();
  }, [univ]);
  useEffect(() => {
    if (isSuccess) setMajor(data.data.data);
  }, [data]);
  return (
    <>
      <Select
        className="select input-bordered w-96 mb-3 max-lg:w-80"
        options={unviersity}
        label={"대학"}
        htmlFor={"university"}
        {...register("univ")}
        {...rest}
      />
      <Select
        className="select input-bordered w-96 mb-3 max-lg:w-80"
        type="text"
        label={"전공"}
        htmlFor={"major"}
        options={major}
        value={maj}
        {...register("major", { required: "전공을 입력해주세요" })}
        {...rest}
      />
    </>
  );
}

export default MajorInput;
