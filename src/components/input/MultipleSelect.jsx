import { useRef, useState, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "./Input";
const category = [
  "알고리즘",
  "코딩 테스트",
  "프로그래밍 언어",
  "프로젝트",
  "디자인",
];

function MultipleSelect({ label, register, htmlFor }) {
  const { control } = useForm({
    defaultValues: {
      category: [], // 초기값으로 빈 배열 전달
    },
  });
  const [value, setValue] = useState([]);
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "category", // unique name for your Field Array
    }
  );
  const handleDelete = (v) => {
    let array = [...value];
    let index = value.indexOf(v);
    array.splice(index, 1);
    setValue([...array]);
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
      {fields.map((field, index) => (
        <Input
          label={label}
          hidden
          register={register}
          htmlFor={htmlFor}
          value={value.join(",")}
          key={field.id}
        ></Input>
      ))}
      <div
        className="w-96  rounded-lg min-h-12 cursor-pointer flex flex-wrap  border-2 border-red-300  mb-3"
        onClick={() => setHidden(!hidden)}
      >
        {value.map((v) => (
          <div className="flex border-2 m-1 items-center box-border p-1">
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
        <div className="absolute z-30 bg-white border-2 w-96 rounded-lg bottom-[-155px]">
          {category.map((cate) => (
            <div
              onClick={(e) => {
                let array = [...value];
                if (array.includes(e.target.textContent)) return;
                array.push(e.target.textContent);
                setValue([...array]);
                setHidden(!hidden);
              }}
              className="p-1 hover:bg-slate-200"
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
