import { useState, useRef, useEffect, forwardRef } from "react";
import Input from "./Input";
function Select({ label, placeHolder, options, htmlFor, ...rest }, forwardRef) {
  const [hidden, setHidden] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (!hidden && !ref.current.contains(e.target)) setHidden(true);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [hidden]);
  return (
    <>
      <div className="relative flex flex-col" ref={ref}>
        <label htmlFor={label}>{label}</label>
        <select
          id={label}
          className="input border-red-300  mb-3 select z-10 bg-white border-2 w-96 rounded-lg mr-12"
          ref={forwardRef}
          {...rest}
        >
          {options.map((op) => (
            <option
              key={op}
              className="p-1 hover:bg-slate-200 text-base"
              onClick={() => {
                setHidden(!hidden);
              }}
              value={op}
            >
              {op}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default forwardRef(Select);
