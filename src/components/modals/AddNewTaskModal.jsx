import React from "react";

export const AddNewTaskModal = ({ closeFn }) => {
  return (
    <div>
      <button type="button" onClick={closeFn}>
        Close
      </button>
      <p>Add new task</p>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
      </form>
    </div>
  );
};
