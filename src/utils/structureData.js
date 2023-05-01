export const structureDataGlobal = (data) => {
  const newData = [];

  for (let i = 0; i < data.length; i++) {
    const dataKeys = Object.keys(data[i].data);
    const date = data[i].date;
    const subKeys = {};

    for (let key of dataKeys) {
      subKeys[key] = Object.keys(data[i].data[key]);
    }

    const subValues = {};

    for (let key of dataKeys) {
      subValues[key] = Object.values(data[i].data[key]);
    }

    newData.push({ dataKeys, subKeys, subValues, date });
  }
  return newData;
};

export const structureDataIndian = (data) => {
  const dataKeys = Object.keys(data);
  const subKeys = {};
  const subValues = {};

  dataKeys.forEach((key) => {
    subKeys[key] = Object.keys(data[key]);
    subValues[key] = Object.values(data[key]);
  });

  return { dataKeys, subKeys, subValues };
};

export const categorizeData = (data) => {
  const category = [];
  data?.map((object) => {
    if (!category.includes(object.city)) {
      category.push(object.city);
    }
  });
  return category;
};

export const structureFeedstockData = (crudeStructure, path) => {
  const displayValues = [];
  const callValues = [];

  if (crudeStructure[path]) {
    crudeStructure[path].forEach((item) => {
      displayValues.push(item.display);
      callValues.push(item.call);
    });
  }

  return { displayValues, callValues };
};
