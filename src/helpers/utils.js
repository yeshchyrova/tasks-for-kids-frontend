export const formatName = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const sliceTitle = title => {
  if (title.length > 24) return title.slice(0, 20) + "...";
}