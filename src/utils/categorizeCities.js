const categorizeData = (data) => {
  const category = [];
  data.map((object) => {
    if (!category.includes(object.city)) {
      category.push(object.city);
    }
  });
  return category;
};

export default categorizeData;
