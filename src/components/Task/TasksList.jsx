import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../../redux/tasks/tasks-operations";
import { selectTasksInfo } from "../../redux/tasks/tasks-selectors";
import { AddNewTaskModal } from "../modals/AddNewTaskModal";
import { ShortTask } from "./ShortTask";
import { useAuth } from "../../hooks/useAuth";

export const TasksList = () => {
  const { childId } = useParams();
  const { role } = useAuth();
  const dispatch = useDispatch();
  const { isLoading, error, items } = useSelector(selectTasksInfo);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getAllTasks(childId));
  }, [dispatch, childId]);

  return (
    <div className={role === "PARENT" ? `parent-dashboard` : "child-dashboard"}>
        <div className="w-full">
          {role === "PARENT" && (
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg border-2 border-brown px-4 py-2 text-brown text-sm font-semibold font-['Poppins'] mb-6"
            >
              Add new task
            </button>
          )}
          {isLoading ? (
            <p>Loading tasks...</p>
          ) : error === 404 ? (
            <div className="flex justify-center items-start no-tasks-found">
              <p className="w-[280px] text-center text-grey text-xl font-medium mt-[100px]">
                No tasks found
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-y-11 w-full mb-5">
              {items.map((item) => (
                <li key={item.id}>
                  <ShortTask item={item} />
                </li>
              ))}
            </ul>
          )}
          {isOpen && <AddNewTaskModal closeFn={onClose} />}
        </div>
      
    </div>
  );
};
