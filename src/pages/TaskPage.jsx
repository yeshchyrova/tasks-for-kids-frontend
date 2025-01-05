import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { getTaskById } from "../redux/tasks/tasks-operations";
import {
  formatDateTime,
  formatDeadline,
  formatDurationFromISO,
  formatName,
} from "../helpers/utils";
import { useAuth } from "../hooks/useAuth";
import { CompleteTaskModal } from "../components/modals/CompleteTaskModal/CompleteTaskModal";
import { ConfirmModal } from "../components/modals/ConfirmModal";
import { NameCircle } from "../components/Task/NameCircle";
import { Status } from "../components/Task/Status";
import { IconContext } from "react-icons/lib";

export const TaskPage = () => {
  const { taskId } = useParams();
  const { role } = useAuth();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? `/${role.toLowerCase()}/${task?.childId}/tasks`;

  const toggleCompleteModalOpen = () => {
    setIsCompleteModalOpen(!isCompleteModalOpen);
  };

  const toggleConfirmModalOpen = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const fetchTask = async (id) => {
    setIsLoading(true);
    try {
      const data = await getTaskById(id);
      setTask(data);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (!isCompleteModalOpen) {
      fetchTask(taskId);
    }
  }, [taskId, isCompleteModalOpen]);

  return (
    <section className="task-info-page">
      {!task ? (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          error && <p>{error}</p>
        )
      ) : (
        <div className="relative">
          <NavLink
            to={backLinkHref}
            className="block mb-3 absolute -top-4 -left-8 transition-colors"
          >
            <IconContext.Provider
              value={{
                className: "fill-black hover:fill-[#2176AE] transition-colors",
              }}
            >
              <div>
                <HiOutlineArrowLongLeft size={"26px"} />
              </div>
            </IconContext.Provider>
          </NavLink>
          <div className="pt-5">
            <div className="bg-[#fe6847]/25 rounded border border-[#fe6847] w-fit px-2 mb-3">
              <p className="text-[#fe6847] text-[15px] font-semibold">
                {formatName(task.taskType)}
              </p>
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <p className="text-black text-[15px] font-semibold">
                Assigned by
              </p>
              <NameCircle name={task.parentName} role="PARENT" />
            </div>
            <div className="flex gap-4 items-center mb-7">
              <p className="text-black text-[15px] font-semibold">
                Assigned to
              </p>
              <NameCircle name={task.childName} role="CHILD" />
            </div>

            <div className="flex gap-28 mb-14">
              <div className="w-[45%]">
                <div className="mb-7 w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-center text-black text-2xl font-bold">
                      {formatName(task.title)}
                    </p>
                    <Status status={task.status} />
                  </div>

                  {task.description && (
                    <p className="text-[#666666] text-sm font-medium w-full">
                      {task.description}
                    </p>
                  )}
                </div>

                {task.status !== "TODO" && task.reportType && (
                  <div className="mb-[64px]">
                    <p className="text-black text-2xl font-bold mb-1">Report</p>
                    {task.reportType === "TEXT" && (
                      <p className="text-[#666666] text-sm font-medium w-full">
                        {task.textReport}
                      </p>
                    )}
                  </div>
                )}

                {/* SPENT TIME */}
                {task.status !== "TODO" && <div></div>}
              </div>

              {/* RIGHT SIDE */}
              <div>
                {/* DEADLINE */}
                <div className="flex gap-9 mb-6 items-center">
                  <p className="text-black text-[15px] font-semibold">
                    Deadline
                  </p>
                  <div className="w-[140px] bg-[#fe4747]/20 rounded border border-[#ff0000] text-[#ff0000] text-[15px] font-semibold flex justify-center leading-none items-center py-[2px]">
                    {formatDeadline(task.deadline)}
                  </div>
                </div>

                {/* REPORT TIME OR REPORT TYPE*/}
                {task.status !== "TODO" ? (
                  <div className="flex gap-[15px] mb-[90px] items-center">
                    <p className="text-black text-[15px] font-semibold">
                      Report time
                    </p>
                    <p className="w-[140px] bg-[#00ff00]/20 rounded border border-[#16ca37] text-[#16ca37] text-[15px] font-semibold flex justify-center leading-none items-center py-[2px]">
                      {formatDateTime(task.reportTime)}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center">
                    <p className="text-black text-[15px] font-semibold">
                      Report type
                    </p>
                    <p className="text-center text-black text-[15px] font-semibold">
                      {task.reportType
                        ? formatName(task.reportType)
                        : "No report is required"}
                    </p>
                  </div>
                )}

                {/* SPENT TIME AND MOOD */}
                {task.status !== "TODO" && (
                  <>
                    <div className="flex gap-5 items-center text-black text-[15px] font-semibold mb-5">
                      <p>Spent time</p>
                      <p>{formatDurationFromISO(task.spentTime)}</p>
                    </div>
                    <div className="flex items-center gap-[60px]">
                      <p className="text-black text-[15px] font-semibold">
                        Mood
                      </p>
                      <div className="bg-[#fe9b00]/25 rounded-lg border-2 border-[#b79800] flex items-center justify-center py-1 px-2 text-center text-[#b79800] text-[17px] font-semibold">
                        {formatName(task.mood)}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {role === "CHILD" && task.status === "TODO" && (
              <button
                type="button"
                onClick={toggleCompleteModalOpen}
                className="bg-[#7dff33]/40 rounded-lg border-2 border-[#13b501] text-center text-[#ff6e00] text-xl font-bold py-1 px-4 hover:bg-[#d5ffbc] transition-colors mx-auto block"
              >
                Complete
              </button>
            )}
            {role === "PARENT" && task.status === "CONFIRM" && (
              <button type="button" onClick={toggleConfirmModalOpen}>
                Confirm
              </button>
            )}
          </div>

          {isCompleteModalOpen && (
            <CompleteTaskModal
              closeFn={toggleCompleteModalOpen}
              title={task.title}
              reportType={task.reportType}
              taskId={task.id}
              rerenderFn={fetchTask}
            />
          )}
          {isConfirmModalOpen && (
            <ConfirmModal closeFn={toggleConfirmModalOpen} />
          )}
        </div>
      )}
    </section>
  );
};
