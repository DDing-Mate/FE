import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateInput({ htmlFor, control, register, watch, setValue }) {
  const [value, onChange] = useState(new Date());
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
  const duedate = watch("duedate");

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (!hidden && !ref.current.contains(e.target)) setHidden(true);
    };
    document.addEventListener("click", handleOutsideClose);
    setValue("duedate", moment(value).format("yyyy-MM-DD"));

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [hidden]);
  return (
    <>
      <div className="relative" ref={ref}>
        <Input
          label={"마감일"}
          className="input border-2 border-red-300 w-96 mb-3"
          placeholder="yyyy-mm-dd"
          onClick={() => {
            setHidden(!hidden);
          }}
          register={register}
          htmlFor={htmlFor}
          value={duedate}
        />
        {!hidden && (
          <Calendar
            onChange={onChange}
            value={value}
            formatDay={(locale, date) => moment(date).format("DD")}
            className="absolute left-0 top-20"
            onClickDay={() => {
              setHidden(true);
            }}
            next2Label={false}
            prev2Label={false}
            minDate={new Date()}
          />
        )}
      </div>
    </>
  );
}

export default DateInput;
