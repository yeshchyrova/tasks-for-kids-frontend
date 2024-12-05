import React from "react";
import { NavLink } from "react-router-dom";

export const ShortTaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(
        ({
          id,
          title,
          description,
          deadline,
          childId,
          parentId,
          taskType,
          reportType,
          status,
          parentName,
          childName,
        }) => (
          <li key={id} className="border-black border-spacing-1 mb-2">
            <p>{title}</p>
            { description && <p>{description}</p>}
            <p>{deadline ? deadline : "No deadline"}</p>
            <p>
              Child: {childName}
            </p>
            <p>
              Parent: {parentName}
            </p>
            <p>{taskType}</p>
            <p>{reportType ? reportType: "No report required"}</p>
            <p>{status}</p>
            <NavLink to={`/parent/${childId}/tasks/${id}`}>Details</NavLink>
          </li>
        )
      )}
    </ul>
  );
};
