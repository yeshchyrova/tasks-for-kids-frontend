import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Task = () => {
  const { childId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  }, [dispatch]);
  console.log("Child id from url: ", childId);
  return (
    <div>
      Task Page <br />
      <p>ID child: {childId}</p>
    </div>
  );
};
