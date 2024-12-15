import React from "react";
import { buttonClasses } from "./commonClasses";

export const ButtonsList = ({ closeFn, closeText, submitText }) => {
  return (
    <div className="flex justify-around">
      <button type="button" onClick={closeFn} className={`${buttonClasses}`}>
        {closeText}
      </button>
      <button className={`${buttonClasses}`} type="submit">
        {submitText}
      </button>
    </div>
  );
};
