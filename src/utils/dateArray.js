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

export const yearArray = (tillThisYear) => {
  const currentYear = new Date().getFullYear();

  const startYear = tillThisYear ? tillThisYear : currentYear - 12;

  const yearsArray = [];

  for (let year = currentYear; year >= startYear; year--) {
    yearsArray.push(year);
  }

  return yearsArray;
};

//convert 11/10/2022 -> 11th October
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
  var formattedDate = day + daySuffix + " " + months[month - 1];

  return formattedDate;
};

//convert 13/11/2022 to 13th Nov,2022
export const formatDate_DD_MM = (dateInputs) => {
  return dateInputs.map((dateString) => {
    const dateParts = dateString.split("/");
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    const months = [
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

    const formattedDate = `${day}${getOrdinalSuffix(day)} ${
      months[month - 1]
    }, ${year}`;

    return formattedDate;
  });
};

const getOrdinalSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export function formatGraphDataInAscendingOrder(rawData, prevData) {
  const existingCities = Object.keys(rawData);

  if (!existingCities.length) {
    return rawData;
  }

  for (const city of existingCities) {
    const cityData = rawData[city];

    const sortedDates = cityData.date.sort((a, b) => {
      const dateA = new Date(a.split("/").reverse().join("-"));
      const dateB = new Date(b.split("/").reverse().join("-"));
      return dateA - dateB;
    });

    const prevCityData = prevData[city];

    const sortedData = {
      date: sortedDates,
      value: sortedDates.map((sortedDate) => {
        const valueIndex = prevCityData.date.findIndex(
          (oldDate) => oldDate === sortedDate
        );

        return prevCityData.value[valueIndex];
      }),
    };

    rawData[city] = sortedData;
  }

  return rawData;
}
