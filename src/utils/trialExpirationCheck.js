function isMoreThanTwoDaysAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMs = now - date;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays > 2;
}

const dateToCheck = "Wed, 26 Apr 2023 13:49:22 GMT";
const result = isMoreThanTwoDaysAgo(dateToCheck);
console.log(result); // true or false
