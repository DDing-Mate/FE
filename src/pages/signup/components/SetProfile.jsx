import { useQuery } from "@tanstack/react-query";
import Input from "../../../components/input/Input";
import MultipleSelect from "../../../components/input/MultipleSelect";
import { getMajor, getUnviersity } from "../../../api";
import { useEffect, useState } from "react";
import Select from "../../../components/input/Select";
import MajorInput from "../../../components/input/MajorInput";

function SetProfile({ register, watch, setValue, getValues }) {
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
