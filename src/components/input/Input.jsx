import { forwardRef, useEffect } from "react";

function Input({ label, type = "text", placeholder, htmlFor, ...rest }, ref) {
  return (
    <div className="flex flex-col">
      <label className={htmlFor} htmlFor={htmlFor}>
        <span className="label-text-alt text-lg">{label}</span>
      </label>
      <input
        ref={ref}
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default forwardRef(Input);
