import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { Input } from "../forms/AddTaskForm/Input";
export const AddNewTaskModal = ({ closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const classes =
    "rounded-lg border border-[#37729c] outline-none px-[10px] py-[7px] bg-[#134668] text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors w-full";

  const buttonClasses =
    "rounded-xl border-2 border-[#4381ad] hover:bg-[#00375b] transition-colors text-center text-white text-sm font-semibold font-['Poppins'] py-[5px] w-[106px]";

  useEffect(() => {
    console.log("Min date: ", currentDate);
    console.log("Selected date: ", date);
  }, [date, currentDate]);

  const onSubmit = (data) => {
    // const updatedData = { login: data.email, password: data.password };
    // dispatch(login(updatedData));
    //close modal
    // reload
  };

  return (
    <div className="bg-black/40 fixed top-0 left-0 z-50 w-screen h-screen no-doc-scroll">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#134668] rounded-lg border
        border-[#2176ae] pt-[48px] pb-[32px] px-7 flex flex-col w-[505px]"
      >
        <button
          type="button"
          className="absolute top-[16px] right-[16px] border-none"
          onClick={closeFn}
        >
          <IconContext.Provider
            value={{
              className:
                "fill-[#7db8e2] hover:fill-[#3f85b4] transition-colors",
            }}
          >
            <div>
              <IoClose size={"16px"} />
            </div>
          </IconContext.Provider>
        </button>
        <p className="text-center text-white text-xl font-semibold mb-7">
          Add new task
        </p>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="flex flex-col gap-5 mb-12">
            <div className="flex items-center justify-between gap-4">
              <label
                className="font-['Poppins'] text-center text-white font-semibold"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className={`h-[36px] ${classes} w-full`}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="flex justify-between gap-4">
              <label
                htmlFor="description"
                className="font-['Poppins'] text-center text-white font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                cols="43"
                className={`${classes} scroll resize-none overflow-y-scroll`}
              />
            </div>

            {/* DEADLINE */}
            <div className="flex justify-between gap-4 items-center">
              <p className="font-['Poppins'] text-center text-white font-semibold">
                Deadline
              </p>
              <div className="w-full">
                <DtPicker
                  onChange={setDate}
                  withTime={true}
                  showTimeInput={true}
                  todayBtn={true}
                  minDate={currentDate}
                  autoClose={false}
                  placeholder=" "
                  inputClass={`custom-input ${classes}`}
                  headerClass="custom-header"
                />
              </div>
            </div>

            {/* TASK TYPE */}
            <div className="flex justify-between gap-4 items-center">
              <label
                className="text-center text-white font-semibold"
                htmlFor="task-type"
              >
                Task type
              </label>
              <select
                name="task-type"
                id="task-type"
                className={`${classes} w-[352px]`}
              >
                <option value="homework">Homework</option>
                <option value="housework">Housework</option>
                <option value="other" selected>
                  Other
                </option>
              </select>
            </div>

            {/* REPORT TYPE */}
            <div className="flex justify-between items-center">
              <label
                className="text-center text-white font-semibold"
                htmlFor="task-type"
              >
                Report type
              </label>
              <select
                name="report-type"
                id="report-type"
                className={`${classes} w-[339px]`}
              >
                <option value="text">Text</option>
                <option value="photo">Photo</option>
                <option value="none" selected>
                  No report
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-around">
            <button
              type="button"
              onClick={closeFn}
              className={`${buttonClasses}`}
            >
              Cancel
            </button>
            <button className={`${buttonClasses}`} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
