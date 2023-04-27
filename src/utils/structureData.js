const structureData = (data) => {
  const newData = [];

  for (let i = 0; i < data.length; i++) {
    const dataKeys = Object.keys(data[i].data);
    const subKeys = {};

    for (let key of dataKeys) {
      subKeys[key] = Object.keys(data[i].data[key]);
    }

    const subValues = {};

    for (let key of dataKeys) {
      subValues[key] = Object.values(data[i].data[key]);
    }

    newData.push({ dataKeys, subKeys, subValues });
  }
  return newData;
};

export default structureData;
