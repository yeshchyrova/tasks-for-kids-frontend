import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "react-calendar-datetime-picker/dist/style.css";
import { ModalWrapper } from "../ModalWrapper";
import { Calendar } from "../../../helpers/Calendar";
import {
  errorClasses,
  inputBlockClasses,
  inputClasses,
  labelClasses,
} from "../utils/commonClasses";
import { Textarea } from "../utils/Textarea";
import { SpentTimeBlock } from "./SpentTimeBlock";
import { MoodBlock } from "./MoodBlock";
import { ButtonsList } from "../utils/ButtonsList";
import { formatDate, formatDurationToISO8601 } from "../../../helpers/utils";
import { completeTask } from "../../../redux/tasks/tasks-operations";

export const CompleteTaskModal = ({
  closeFn,
  rerenderFn,
  title,
  reportType,
  taskId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [currentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });

  const [date, setDate] = useState(currentDate);
  const [spentTimeError, setSpentTimeError] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    if (!date) setDateError(true);
    else setDateError(false);
  }, [date]);

  const onSubmit = (data) => {
    if (
      data.days === data.hours &&
      data.hours === data.minutes &&
      data.minutes === data.months &&
      data.months === "0"
    ) {
      setSpentTimeError(true);
      return;
    }
    if (reportType && !date) {
      setDateError(true);
      return;
    }
    const formattedDuration = formatDurationToISO8601({
      days: data.days,
      hours: data.hours,
      months: data.months,
      minutes: data.minutes,
    });

    const formattedData = {
      id: taskId,
      photoReport: reportType === "PHOTO" ? data.photoReport : null,
      textReport: reportType === "TEXT" ? data.report : null,
      reportTime: reportType ? formatDate(date) : null,
      spentTime: formattedDuration,
      mood: data.mood,
    };
    console.log("formattedData: ", formattedData);
    console.log("formattedDuration: ", formattedDuration);

    dispatch(completeTask(formattedData));
    // rerenderFn(taskId);
    closeFn();
  };

  return (
    <ModalWrapper onclose={closeFn} classes="pt-[32px] pb-[30px] gap-6">
      <p className="text-center text-white text-xl font-semibold">{title}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-7"
      >
        {/* REPORT TEXT */}
        {reportType && reportType === "TEXT" && (
          <div className={`${inputBlockClasses} items-start`}>
            <Textarea
              type={"report"}
              title={"Report"}
              register={register}
              isRequired={true}
              size={{ rows: "5", cols: "33" }}
            />
            {errors.report?.type === "maxLength" && (
              <span className={`${errorClasses} left-[72px]`}>
                Max length 500 characters exceeded
              </span>
            )}
            {errors.report?.type === "required" && (
              <span className={`${errorClasses} left-[72px]`}>
                Report is required
              </span>
            )}
          </div>
        )}

        {/* REPORT TIME */}
        {reportType && (
          <div className={inputBlockClasses}>
            <p className={`${labelClasses} text-nowrap`}>Report time</p>
            <div className="w-full">
              <Calendar
                setDate={setDate}
                classes={`${inputClasses}`}
                parameters={{
                  maxDate: currentDate,
                  initValue: currentDate,
                }}
              />
            </div>
            {dateError && (
              <span className={`${errorClasses} left-[113px]`}>
                Report time is required
              </span>
            )}
          </div>
        )}

        {/* SPENT TIME */}
        <SpentTimeBlock
          register={register}
          spentTimeError={spentTimeError}
          setSpentTimeError={setSpentTimeError}
        />

        {/* MOOD */}
        <MoodBlock register={register} />

        <ButtonsList
          closeFn={closeFn}
          closeText="Cancel"
          submitText="Complete"
        />
      </form>
    </ModalWrapper>
  );
};
