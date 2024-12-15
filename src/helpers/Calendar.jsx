import React from 'react'
import { DtPicker } from 'react-calendar-datetime-picker';

export const Calendar = ({ setDate, classes, parameters }) => {
  return (
    <DtPicker
      onChange={setDate}
      withTime={true}
      showTimeInput={true}
      todayBtn={true}
      // minDate={currentDate}
      autoClose={false}
      placeholder=" "
      inputClass={`custom-input ${classes}`}
      headerClass="custom-header"
      {...parameters}
    />
  );
};
