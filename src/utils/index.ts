import dayjs from "dayjs";

export const convertAge = (date: string) => {
  const today = dayjs();
  const candidateAge = today.diff(date, "year");
  return `${candidateAge} anos`;
};
