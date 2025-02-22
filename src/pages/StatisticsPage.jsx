import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpiredTasks, getSpentTimeByTaskType, getTasksByMood } from "../redux/tasks/tasks-operations";
import { formatDurationFromISO } from "../helpers/utils";
// import { ShortTask } from "../components/Task/ShortTask";

export const StatisticsPage = () => {
  const { childId } = useParams();
  // const [mood, setMood] = useState('good');

  const [isSpentTimeLoading, setIsSpentTimeLoading] = useState(false);
  const [spentTime, setSpentTime] = useState([]);
  const [spentTimeError, setSpentTimeError] = useState(null);

  // const [moodTasks, setMoodTasks] = useState([]);
  // const [isMoodTasksLoading, setIsMoodTasksLoading] = useState(false);
  // const [moodTasksError, setMoodTasksError] = useState(null);


  // const [expiredTasks, setExpiredTasks] = useState([]);
  // const [isExpiredTasksLoading, setIsExpiredTasksLoading] = useState(false);
  // const [expiredTasksError, setExpiredTasksError] = useState(null);

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

  // const fetchTasksByMood = async (childId, mood) => {
  //   setIsMoodTasksLoading(true);
  //   try {
  //     const data = await getTasksByMood(childId, mood);
  //     console.log("DAta", data)
  //     setMoodTasks(data);
  //     setMoodTasksError(null);
  //   } catch (e) {
  //     setMoodTasks([]);
  //     setMoodTasksError(e);
  //   } finally {
  //     setIsMoodTasksLoading(false);
  //   }
  // };


  // const fetchExpiredTasks = async (childId) => {
  //   setIsExpiredTasksLoading(true);
  //   try {
  //     const data = await getExpiredTasks(childId);
  //     setExpiredTasks(data);
  //     setExpiredTasksError(null);
  //   } catch (e) {
  //     setExpiredTasks([]);
  //     setExpiredTasksError(e);
  //   } finally {
  //     setIsExpiredTasksLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log(moodTasks);
  // }, [moodTasks]);

  useEffect(() => {
    fetchSpentTime(childId);
  }, [childId]);

  // useEffect(() => {
  //   fetchExpiredTasks(childId);
  // }, [childId]);

  // useEffect(() => {
  //   fetchTasksByMood(childId, mood);
  // }, [childId, mood]);

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

      {/* <div>
        <h2>Tasks By Mood</h2>
        {isMoodTasksLoading && <p>Loading...</p>}
        {moodTasksError && <p>Something went wrong. Please try again later!</p>}
        {!isMoodTasksLoading &&
          !moodTasksError &&
          (moodTasks.length === 0 ? (
            <p>No completed tasks with this mood yet</p>
          ) : (
            <ul>
              {moodTasks.map((data) => (
                <li key={data.id}>
                  <ShortTask
                    item={{
                      id: data.id,
                      title: data.title,
                      deadline: data.deadline,
                      childId: data.id_child,
                      status: data.status,
                      parentName: data.parentname,
                      childName: data.childname,
                    }}
                  />
                </li>
              ))}
            </ul>
          ))}
      </div> */}
    </div>
  );
};
