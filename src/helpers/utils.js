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
  const delimiter = deadline.indexOf("T");
  const date = deadline.slice(0, delimiter);
  const formattedDate = date.split("-").reverse().join(".");
  const time = deadline.slice(delimiter + 1, deadline.length - 3);
  return (
    <div className="flex gap-[6px]">
      <p>{formattedDate}</p>
      <p>{time}</p>
    </div>
  );
};

export const formatDate = (date) => {
  console.log(date)
  if (!date) return null;
  const updatedMin =
    String(date.minute).length === 1 ? `0${date.minute}` : date.minute;
  const updatedMonth =
    String(date.month).length === 1 ? `0${date.month}` : date.month;
  return `${date.year}-${updatedMonth}-${date.day}T${date.hour}:${updatedMin}:00`;
}

export const firstLetter = (name) => {
  return name.charAt(0);
};

export const formatDurationToISO8601 = ({ days, hours, months, minutes }) => {
  return `P${months}M${days}DT${hours}H${minutes}M0S`;
};