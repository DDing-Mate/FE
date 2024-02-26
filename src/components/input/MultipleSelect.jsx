import { useRef, useState, useEffect, forwardRef } from "react";

import Input from "./Input";
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

function MultipleSelect({ label, htmlFor, setValue, watch }, forwardRef) {
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
  const categoryValue = watch("categories");
  const handleDelete = (v) => {
    let array = [...categoryValue];
    let index = categoryValue.indexOf(v);
    array.splice(index, 1);
    setValue("categories", [...array]);
  };

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (!hidden && !ref.current.contains(e.target)) setHidden(true);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [hidden]);

  return (
    <div className="relative flex flex-col" ref={ref}>
      <Input
        label={label}
        htmlFor={htmlFor}
        value={categoryValue}
        ref={forwardRef}
        hidden
      />
      <div
        className="w-96 input input-bordered rounded-lg min-h-12 cursor-pointer flex flex-wrap mb-3 max-md:w-80"
        onClick={() => setHidden(!hidden)}
      >
        {categoryValue?.map((v) => (
          <div
            className="flex border-2 m-1 items-center box-border p-1"
            key={v}
          >
            <div className="text-sm mr-2">{v}</div>
            <button
              type="button"
              className=" font-bold rounded-lg text-sm hover:text-red-600 w-7"
              onClick={(e) => {
                handleDelete(v);
                e.stopPropagation();
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      {!hidden && (
        <div className="absolute z-30 bg-white border-2 w-96 rounded-lg bottom-[-275px] max-md:w-80">
          {options.map((cate) => (
            <div
              key={cate}
              onClick={(e) => {
                let array = [...categoryValue];
                if (array.includes(e.target.textContent)) return;
                array.push(e.target.textContent);
                setValue("categories", [...array]);
                setHidden(!hidden);
              }}
              className="p-1 hover:bg-blue-600 text-sm"
            >
              {cate}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default forwardRef(MultipleSelect);
