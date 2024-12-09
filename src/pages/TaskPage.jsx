import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../redux/tasks/tasks-operations";

export const TaskPage = () => {
  const { taskId } = useParams();
  const [, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTask = async (id) => {
    setIsLoading(true);
    try {
      const data = await getTaskById(id);
      setTask(data);
      console.log("Task from TaskPage: ", data);
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

  return isLoading ? <p>Loading...</p> : error ? <p>{error}</p> : <div></div>;
};
