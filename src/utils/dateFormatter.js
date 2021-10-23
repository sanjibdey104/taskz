export const dateFormatter = (inputDate) => {
  const dateFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  let refreshedDate = new Date(`${inputDate}`);
  inputDate =
    refreshedDate.toLocaleDateString("en-US", dateFormatOptions) ||
    inputDate.toLocaleDateString("en-US", dateFormatOptions);
  return inputDate;
};
