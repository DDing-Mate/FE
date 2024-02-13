import { useEffect } from "react";

function Input({
  label,
  type = "text",
  placeholder,
  htmlFor,
  register,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      <label className={htmlFor} htmlFor={htmlFor}>
        <span className="label-text-alt text-lg">{label}</span>
      </label>
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-lg"
        {...register(htmlFor)}
        {...rest}
      />
    </div>
  );
}

export default Input;
