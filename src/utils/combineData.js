const combineData = (data) => {
  return data.reduce((acc, curr) => {
    const existingData = acc.find(
      (item) => item.polymerType === curr.polymerType
    );
    if (existingData) {
      existingData.polymerSubType.push(curr.polymerSubType);
      existingData.value.push(curr.value);
    } else {
      acc.push({
        id: curr._id,
        city: curr.city,
        polymerType: curr.polymerType,
        polymerSubType: [curr.polymerSubType],
        value: [curr.value],
      });
    }
    return acc;
  }, []);
};

export default combineData;
