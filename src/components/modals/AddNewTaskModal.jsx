import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
export const AddNewTaskModal = ({ closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);

  useEffect(() => {
    console.log("Selected date: ", date);
  }, [date]);

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
        border-[#2176ae] pt-[45px] pb-[30px] px-6 flex flex-col"
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
        <p className="text-center text-white text-base font-semibold">
          Add new task
        </p>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
            </div>

            <div className="flex justify-between">
              <label htmlFor="description">Description</label>
              <input
                type="area"
                name="description"
                id="description"
                className="overflow-y-scroll"
              />
            </div>

            <div className="flex justify-between">
              <p>Deadline</p>
              <div>
                <DtPicker
                  onChange={setDate}
                  withTime={true}
                  showTimeInput={true}
                  todayBtn={true}
                  minDate={Date.now()}
                  autoClose={false}
                  inputClass=""
                  headerClass=""
                />
              </div>
            </div>
          </div>

          <button
            className="py-2 px-[28px] bg-[#6f5225] rounded-2xl border font-light border-[#fbb13c] text-center text-white ml-auto block hover:bg-[#c89035] focus:bg-[#c89035] transition-colors text-sm"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
