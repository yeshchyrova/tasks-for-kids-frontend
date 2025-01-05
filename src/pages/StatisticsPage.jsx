import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpentTimeByTaskType } from "../redux/tasks/tasks-operations";
import { formatDurationFromISO } from "../helpers/utils";

export const StatisticsPage = () => {
  const { childId } = useParams();
  const [isSpentTimeLoading, setIsSpentTimeLoading] = useState(false);
  const [spentTime, setSpentTime] = useState([]);
  const [spentTimeError, setSpentTimeError] = useState(null);

  const fetchSpentTime = async (childId) => {
    setIsSpentTimeLoading(true);
    try {
      const data = await getSpentTimeByTaskType(childId);
      setSpentTime(data);
      setSpentTimeError(null);
    } catch (e) {
      setSpentTime([]);
      setSpentTimeError(e);
    } finally {
      setIsSpentTimeLoading(false);
    }
  };

  useEffect(() => {
    fetchSpentTime(childId);
  }, [childId]);

  return (
    <div>
      <div>
        <h2>Spent time on each task type</h2>
        {isSpentTimeLoading && <p>Loading...</p>}
        {spentTimeError && <p>Something went wrong. Please try again later!</p>}
        {!isSpentTimeLoading &&
          !spentTimeError &&
          (spentTime.length === 0 ? (
            <p>No completed tasks yet</p>
          ) : (
            <ul>
              {spentTime.map((data) => (
                <li key={data.taskType}>
                  <p>{data.taskType}: </p>
                  <p>{formatDurationFromISO(data.spentTotal)}</p>
                </li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
};
