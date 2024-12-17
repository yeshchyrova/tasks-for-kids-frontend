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

export const formatDurationFromISO = (duration) => {
  const regex = /P(?:T)?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = duration.match(regex);

  if (!match) {
    return "Invalid duration format";
  }

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;

  const parts = [];
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(" ") : "0 seconds";
};

export const formatDateTime = (input) => {
  if (input.length !== 5) {
    return "Invalid input format";
  }

  const year = input[0];
  const month = input[1];
  const day = input[2];
  const hours = input[3];
  const minutes = input[4];

  return `${String(day).padStart(2, "0")}.${String(month).padStart(
    2,
    "0"
  )}.${year} ${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};
