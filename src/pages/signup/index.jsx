import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import SetProfile from "./components/SetProfile";
import SetAccount from "./components/SetAccount";
import { useMutation } from "@tanstack/react-query";
import { postMember } from "../../api";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      studentId: "",
      univ: "",
      major: "",
      birth: "",
      introduction: "",
      categories: [],
    },
  });
  const [accountSetup, setAccountSetup] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);

  const mutation = useMutation({
    mutationFn: postMember,
    mutationKey: ["signup"],
  });

  const submit = (data) => {
    console.log(data);
    console.log(typeof data.studentId);
    mutation.mutate(data, {
      onSuccess: () => navigate("/"),
      onError: (err) => console.log(err),
    });
  };

  const handleNextButton = () => {
    if (!confirmEmail) toast.error("이메일 인증을 완료하세요!");
    else if (getValues("password") !== getValues("passwordCheck"))
      toast.error("패스워드가 일치하지 않습니다!");
    else {
      setAccountSetup(true);
      setValue("email", getValues("email") + "@mju.ac.kr");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <form
          className="w-full flex flex-col items-center mt-5"
          onSubmit={handleSubmit(submit)}
        >
          {!accountSetup ? (
            <>
              <SetAccount
                register={register}
                getValues={getValues}
                setConfirmEmail={setConfirmEmail}
              />
              <button
                type="button"
                className="btn w-48 bg-black text-white"
                onClick={handleNextButton}
              >
                다음
              </button>
            </>
          ) : (
            <>
              <SetProfile
                register={register}
                watch={watch}
                setValue={setValue}
                getValues={getValues}
              />
              <button type="submit" className="btn w-48 bg-black text-white">
                가입하기
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default SignUp;
