import Input from "../../../components/input/Input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { confirmEmail, confirmEmailCode } from "../../../api";
import { toast } from "react-toastify";

function EamilConfirm({ register, getValues, setConfirmEmail }) {
  const [visibile, setVisibile] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailCode, setEmailCode] = useState("");
  const emailMutation = useMutation({
    mutationFn: confirmEmail,
    mutationKey: ["confirmEmail"],
  });
  const emailConfirmMutation = useMutation({
    mutationFn: confirmEmailCode,
    mutationKey: ["confirmEmailCode"],
  });

  const handleEmailConfirm = (data) => {
    emailMutation.mutate(data + "@mju.ac.kr", {
      onSuccess: (data) => {
        setVisibile(true);
        toast.info("인증번호가 전송되었습니다");
        console.log(data);
      },

      onError: (err) => {
        if (err.response.status === 403)
          toast.error("확인되지 않는 이메일입니다!");
        console.log(err.response.status);
        setVisibile(false);
      },
    });
    console.log(emailMutation.isLoading);
  };

  const handleEmailConfirmCode = (data) => {
    emailConfirmMutation.mutate(
      { email: getValues("email") + "@mju.ac.kr", code: emailCode },
      {
        onSuccess: (data) => {
          toast.success("인증 코드가 일치합니다!");
          setSuccess(true);
          setConfirmEmail(true);
          console.log(data);
        },
        onError: (err) => {
          if (err.response.status === 403)
            toast.error("이메일 인증코드가 일치하지 않습니다!");
          console.log(err.response.status);
          setSuccess(false);
        },
      }
    );
  };
  return (
    <div className="w-full max-w-sm relative">
      <div className="flex items-center">
        <Input
          className="input input-bordered w-48 mb-3 max-sm:w-36"
          type="email"
          label={"이메일"}
          htmlFor={"email"}
          disabled={success ? true : false}
          {...register("email", {
            required: "이메일을 입력해주세요!",
          })}
        />
        <div className="text-2xl mt-3 mx-1">@</div>
        <input
          className="flex items-center input input-bordered w-40 mt-3 max-sm:w-36"
          value={"mju.ac.kr"}
          disabled
        />
        <button
          type="button"
          className="btn btn-sm  ml-2 absolute top-9 right-[-60px] max-sm:right-0"
          onClick={() => {
            handleEmailConfirm(getValues("email"));
          }}
          disabled={visibile}
        >
          전송
        </button>
      </div>
      <div className="relative">
        <Input
          className="input input-bordered w-96 mb-3 max-sm:w-80"
          label={"확인번호"}
          htmlFor={"emailConfirm"}
          disabled={success ? true : false}
          value={emailCode}
          onChange={(e) => setEmailCode(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-sm ml-2 absolute top-9 right-[-60px] max-sm:right-0"
          onClick={() => {
            handleEmailConfirmCode(getValues("emailConfirm"));
          }}
          disabled={success ? true : false}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default EamilConfirm;
