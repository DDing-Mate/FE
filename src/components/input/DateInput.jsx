import { useState, useEffect, useRef, forwardRef } from "react";
import Input from "./Input";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

<<<<<<< HEAD
function DateInput({ htmlFor, label, register, watch, setValue, control }) {
  const date = watch(htmlFor);
  const [value, onChange] = useState(date === "" ? new Date() : date);
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
  console.log(date);
=======
function DateInput(
  { htmlFor, register, watch, setValue, label, defaultDate = new Date() },
  forwardRef
) {
  const date = watch(htmlFor);
  const [value, onChange] = useState(defaultDate);
  const [hidden, setHidden] = useState(true);
  const ref = useRef();
>>>>>>> 4d60dd1abd1c7add6af401e50af08e3c32e0ce1c

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
<<<<<<< HEAD
          className="input border-2 border-red-300 w-96 mb-3"
=======
          className="input input-bordered w-96 mb-3"
>>>>>>> 4d60dd1abd1c7add6af401e50af08e3c32e0ce1c
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
