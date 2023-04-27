export const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const yearArray = () => {
  const currentYear = new Date().getFullYear();

  const startYear = currentYear - 10;

  const yearsArray = [];

  for (let year = currentYear; year >= startYear; year--) {
    yearsArray.push(year);
  }

  return yearsArray;
};
