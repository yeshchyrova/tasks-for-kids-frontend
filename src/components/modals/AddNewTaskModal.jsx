import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { formatDate } from "../../helpers/utils";
import { addTask } from "../../redux/tasks/tasks-operations";
import { ModalWrapper } from "./ModalWrapper";
import { Calendar } from "../../helpers/Calendar";
import {
  buttonClasses,
  errorClasses,
  inputBlockClasses,
  inputClasses,
  labelClasses,
} from "./utils/commonClasses";
import { Textarea } from "./utils/Textarea";
import { ButtonsList } from "./utils/ButtonsList";

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
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });

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
    <ModalWrapper
      onclose={closeFn}
      classes="pt-[48px] pb-[32px] w-[480px] gap-8"
    >
      <p className="text-center text-white text-xl font-semibold">
        Add new task
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col gap-7 mb-12">
          {/* TITLE */}
          <div className={inputBlockClasses}>
            <label className={labelClasses} htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={`h-[36px] ${inputClasses} w-full`}
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
          <div className={`${inputBlockClasses}`}>
            <Textarea
              type={"description"}
              title={"Description"}
              register={register}
              isRequired={false}
              size={{ rows: "5", cols: "43" }}
            />
            {errors.description?.type === "maxLength" && (
              <span className={`${errorClasses} left-[110px]`}>
                Max length 500 characters exceeded
              </span>
            )}
          </div>

          {/* DEADLINE */}
          <div className={inputBlockClasses}>
            <p className={labelClasses}>Deadline</p>
            <div className="w-full">
              <Calendar
                setDate={setDate}
                classes={inputClasses}
                parameters={{ minDate: currentDate }}
              />
            </div>
          </div>

          {/* TASK TYPE */}
          <div className={inputBlockClasses}>
            <label
              className="text-center text-white font-semibold text-nowrap"
              htmlFor="taskType"
            >
              Task type
            </label>
            <select
              name="taskType"
              id="taskType"
              className={`${inputClasses} w-[352px]`}
              {...register("taskType", { required: true })}
              defaultValue="OTHER"
            >
              <option value="HOMEWORK">Homework</option>
              <option value="HOUSEWORK">Housework</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* REPORT TYPE */}
          <div className={inputBlockClasses}>
            <label
              className="text-center text-white font-semibold text-nowrap"
              htmlFor="task-type"
            >
              Report type
            </label>
            <select
              name="reportType"
              id="reportType"
              className={`${inputClasses} w-[337px]`}
              {...register("reportType", { required: true })}
              defaultValue="none"
            >
              <option value="TEXT">Text</option>
              <option value="PHOTO">Photo</option>
              <option value="none">No report</option>
            </select>
          </div>
        </div>

        <ButtonsList closeFn={closeFn} closeText="Cancel" submitText="Add" />
      </form>
    </ModalWrapper>
  );
};
