import { useState, useEffect, useRef, forwardRef } from "react";
import Input from "./Input";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateInput(
  { htmlFor, register, watch, setValue, label, defaultDate = new Date() },
  forwardRef
) {
  const date = watch(htmlFor);
  const [value, onChange] = useState(defaultDate);
  const [hidden, setHidden] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (!hidden && !ref.current.contains(e.target)) setHidden(true);
    };
    document.addEventListener("click", handleOutsideClose);
    setValue(htmlFor, moment(value).format("yyyy-MM-DD"));

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [hidden]);
  return (
    <>
      <div className="relative" ref={ref}>
        <Input
          label={label}
          className="input input-bordered w-96 mb-3"
          placeholder="yyyy-mm-dd"
          onClick={() => {
            setHidden(!hidden);
          }}
          ref={forwardRef}
          htmlFor={htmlFor}
          value={date}
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
            minDate={htmlFor === "duedate" ? new Date() : null}
          />
        )}
      </div>
    </>
  );
}

export default forwardRef(DateInput);
