import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../redux/tasks/tasks-operations";
import { selectTasksInfo } from "../redux/tasks/tasks-selectors";
import { ShortTaskList } from "../components/Task/ShortTaskList";
import { AddNewTaskModal } from "../components/modals/AddNewTaskModal";

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
      <button type="button" onClick={openModal}>
        Add new task +
      </button>
      {/* <h3>Task Page</h3> */}
      {/* add error status in state, update status depending on error status from backend */}
      {error ? <p>No tasks found :(</p> : <ShortTaskList tasks={items} />}
      {isOpen && <AddNewTaskModal closeFn={onClose} />}
    </div>
  );
};
