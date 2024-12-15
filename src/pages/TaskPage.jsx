import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getTaskById } from "../redux/tasks/tasks-operations";
import { formatDeadline } from "../helpers/utils";
import { useAuth } from "../hooks/useAuth";
import { ModalWrapper } from "../components/modals/ModalWrapper";
import { CompleteTaskModal } from "../components/modals/CompleteTaskModal/CompleteTaskModal";
import { ConfirmModal } from "../components/modals/ConfirmModal";

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
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTask(taskId);
  }, [taskId]);

  return (
    <section className="task-info-page">
      {!task ? (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          error && <p>{error}</p>
        )
      ) : (
        <div>
          <Link to={backLinkHref}>Back</Link>
          <div>
            <p>{task.title}</p>
            {task.description && <p>{task.description}</p>}
            <div className="flex gap-4">
              <p>Deadline</p>
              {formatDeadline(task.deadline)}
            </div>
            <div className="flex gap-4">
              <p>Task type</p>
              <p>{task.taskType}</p>
            </div>
            <div className="flex gap-4">
              <p>Report type</p>
              <p>{task.reportType || "no report"}</p>
            </div>
            <div className="flex gap-4">
              <p>Status</p>
              <p>{task.status}</p>
            </div>
            <div className="flex gap-4">
              <p>Assigned by</p>
              <p>{task.parentName}</p>
            </div>
            <div className="flex gap-4">
              <p>Assigned to</p>
              <p>{task.childName}</p>
            </div>
          </div>
          {role === "CHILD" && task.status === "TODO" && (
            <button type="button" onClick={toggleCompleteModalOpen}>
              Complete
            </button>
          )}
          {role === "PARENT" && task.status === "CONFIRM" && (
            <button type="button" onClick={toggleConfirmModalOpen}>
              Confirm
            </button>
          )}
          {isCompleteModalOpen && (
            <CompleteTaskModal
              closeFn={toggleCompleteModalOpen}
              title={task.title}
              reportType={task.reportType}
              taskId={task.id}
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
