import { useRef, useState, useEffect } from "react";

import Input from "./Input";
const category = [
  "알고리즘",
  "코딩 테스트",
  "프로그래밍 언어",
  "프로젝트",
  "디자인",
];

function MultipleSelect({ label, register, htmlFor, setValue, watch }) {
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
  const categoryValue = watch("category");
  const handleDelete = (v) => {
    let array = [...categoryValue];
    let index = categoryValue.indexOf(v);
    array.splice(index, 1);
    setValue("category", [...array]);
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
        hidden
        register={register}
        htmlFor={htmlFor}
        value={categoryValue}
      />
      <div
        className="w-96  rounded-lg min-h-12 cursor-pointer flex flex-wrap  border-2 border-red-300  mb-3"
        onClick={() => setHidden(!hidden)}
      >
        {categoryValue.map((v) => (
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
        <div className="absolute z-30 bg-white border-2 w-96 rounded-lg bottom-[-133px]">
          {category.map((cate) => (
            <div
              key={cate}
              onClick={(e) => {
                let array = [...categoryValue];
                if (array.includes(e.target.textContent)) return;
                array.push(e.target.textContent);
                setValue("category", [...array]);
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

export default MultipleSelect;
