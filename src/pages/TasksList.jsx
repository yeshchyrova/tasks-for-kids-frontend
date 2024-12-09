import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../redux/tasks/tasks-operations";
import { selectTasksInfo } from "../redux/tasks/tasks-selectors";
import { AddNewTaskModal } from "../components/modals/AddNewTaskModal";
import { ShortTask } from "../components/Task/ShortTask";

export const TasksList = () => {
  const { childId } = useParams();
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

  return isLoading ? (
    <p>Loading tasks...</p>
  ) : (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="rounded-lg border-2 border-brown px-4 py-2 text-brown text-sm font-semibold font-['Poppins'] mb-6"
      >
        Add new task
      </button>
      {error === 404 ? (
        <p>No tasks found :(</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ShortTask item={item} />
            </li>
          ))}
        </ul>
      )}
      {isOpen && <AddNewTaskModal closeFn={onClose} />}
    </div>
  );
};
