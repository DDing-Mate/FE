function ErrorMessage({ errors }) {
  if (errors?.type === "required") {
    return <p className="text-red-500">필수 값 입니다</p>;
  }
  if (errors?.type === "pattern") {
    return <p className="text-red-500">형식에 맞게 입력해주세요</p>;
  }
}

export default ErrorMessage;
