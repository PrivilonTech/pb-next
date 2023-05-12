export const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
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

//convert 11/10/2022 -> 11th October, 2022
export const formatDate = (dateString) => {
  // Split the date string into month, day, and year
  var parts = dateString.split("/");
  var month = parseInt(parts[0], 10);
  var day = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  // Define an array of month names
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the day with the appropriate suffix
  var daySuffix;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
    }
  }

  // Construct the formatted date string
  var formattedDate = day + daySuffix + " " + months[month - 1] + ", " + year;

  return formattedDate;
};
