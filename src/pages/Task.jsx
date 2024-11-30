import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../redux/tasks/tasks-operations";
import { selectTasksInfo } from "../redux/tasks/tasks-selectors";

export const Task = () => {
  const { childId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, items } = useSelector(selectTasksInfo);

  useEffect(() => {
    dispatch(getAllTasks(childId));
  }, [dispatch, childId]);
  return isLoading ? (
    <p>Loading tasks...</p>
  ) : (
    <div>
      <h3>Task Page</h3>
      {error ? (
        <p>No tasks found :(</p>
      ) : (
        <ul>
          {!isLoading &&
            items.map(
              ({
                id,
                title,
                description = "",
                deadline = "none",
                childId,
                parentId,
                taskType,
                reportType = "none",
                status,
              }) => (
                <li key={id} className="border-black border-spacing-1 mb-2">
                  <p>Title: {title}</p>
                  <p>Description: {description}</p>
                  <p>Deadline: {deadline}</p>
                  <p>Child Id: {childId}</p>
                  <p>Parent Id: {parentId}</p>
                  <p>Task Type: {taskType}</p>
                  <p>Report Type: {reportType}</p>
                  <p>Status: {status}</p>
                </li>
              )
            )}
        </ul>
      )}
    </div>
  );
};
