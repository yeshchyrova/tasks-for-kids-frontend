export const formatName = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const sliceTitle = (title) => {
  if (title.length > 23) return title.slice(0, 20) + "...";
  return title;
};

export const formatDeadline = (deadline) => {
  if (!deadline) return "No deadline";
  const [year, month, day, hour, minute] = deadline;
  return (
    <div className="flex gap-[6px]">
      <p>{`${String(day).padStart(2, "0")}.${String(month).padStart(
        2,
        "0"
      )}.${year}`}</p>
      <p>{`${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0"
      )}`}</p>
    </div>
  );
};

export const formatDate = (date) => {
  if (!date) return null;
  return `${date.year}-${String(date.month).padStart(2, "0")}-${String(
    date.day
  ).padStart(2, "0")}T${String(date.hour).padStart(2, "0")}:${String(
    date.minute
  ).padStart(2, "0")}:00`;
};

export const firstLetter = (name) => {
  return name.charAt(0);
};

export const formatDurationToISO8601 = ({ days, hours, months, minutes }) => {
  return `P${months !== "0" ? `${months}M` : ""}${
    days !== "0" ? `${days}D` : ""
  }T${hours}H${minutes}M0S`;
};
// months !== "0" ? (months === "1" ? "1 month " : `${months} months `) : "";