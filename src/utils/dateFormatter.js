export const dateFormatter = (inputDate) => {
  const dateFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  return inputDate.toLocaleDateString("en-US", dateFormatOptions);
};
