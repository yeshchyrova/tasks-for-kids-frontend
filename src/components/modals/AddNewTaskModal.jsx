import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { formatDate } from "../../helpers/utils";
import { addTask } from "../../redux/tasks/tasks-operations";

export const AddNewTaskModal = ({ closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const { childId } = useParams();

  const dispatch = useDispatch();

  const [date, setDate] = useState(null);

  const [currentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const classes =
    "rounded-lg border border-[#37729c] outline-none px-[10px] py-[7px] bg-[#134668] text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors ";

  const buttonClasses =
    "rounded-xl border-2 border-[#4381ad] hover:bg-[#00375b] transition-colors text-center text-white text-sm font-semibold font-['Poppins'] py-[5px] w-[106px]";

  const inputBlockClasses = "flex items-center justify-between gap-4 relative";

  const errorClasses = "absolute -bottom-5 text-[#f4a19b] text-xs";


  const onSubmit = (data) => {
    const formattedData = {
      title: data.title.trim(),
      description:
        data.description.length === 0 ? null : data.description.trim(),
      deadline: formatDate(date),
      taskType: data.taskType,
      reportType: data.reportType === "none" ? null : data.reportType,
      parentId: user.id,
      childId: Number(childId),
    };
    dispatch(addTask(formattedData));
    closeFn();
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
          <div className="flex flex-col gap-7 mb-12">
            {/* TITLE */}
            <div className={inputBlockClasses}>
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
                {...register("title", { required: true, maxLength: 255 })}
              />
              {errors.title?.type === "required" && (
                <span className={`${errorClasses} left-[52px]`}>
                  Title is required
                </span>
              )}
              {errors.title?.type === "maxLength" && (
                <span className={`${errorClasses} left-[52px]`}>
                  Max length 255 characters exceeded
                </span>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className={`${inputBlockClasses} items-start`}>
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
                {...register("description", { maxLength: 500 })}
              />
              {errors.description?.type === "maxLength" && (
                <span className={`${errorClasses} left-[110px]`}>
                  Max length 500 characters exceeded
                </span>
              )}
            </div>

            {/* DEADLINE */}
            <div className={inputBlockClasses}>
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
            <div className={inputBlockClasses}>
              <label
                className="text-center text-white font-semibold"
                htmlFor="taskType"
              >
                Task type
              </label>
              <select
                name="taskType"
                id="taskType"
                className={`${classes} w-[352px]`}
                {...register("taskType", { required: true })}
                defaultValue="OTHER"
              >
                <option value="HOMEWORK">Homework</option>
                <option value="HOUSEWORK">Housework</option>
                <option value="OTHER">Other</option>
              </select>
              {errors.taskType?.type === "required" && (
                <span>Task type is required</span>
              )}
            </div>

            {/* REPORT TYPE */}
            <div className={inputBlockClasses}>
              <label
                className="text-center text-white font-semibold"
                htmlFor="task-type"
              >
                Report type
              </label>
              <select
                name="reportType"
                id="reportType"
                className={`${classes} w-[337px]`}
                {...register("reportType", { required: true })}
                defaultValue="none"
              >
                <option value="TEXT">Text</option>
                <option value="PHOTO">Photo</option>
                <option value="none">No report</option>
              </select>
              {errors.reportType?.type === "required" && (
                <span>Report type is required</span>
              )}
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
