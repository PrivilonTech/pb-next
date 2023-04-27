import axios from "axios";
import combineData from "./combineData";

export const getCrudeData = async (name, country, selectedOption, setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock?name=${name}&country=${country}&type=${selectedOption}`
  );

  setData({
    labels: response.data.data.key,
    datasets: [
      {
        label: name,
        data: response.data.data.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });
};

export const getIndianData = async (city, setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/${city}`
  );

  setData(combineData(response.data.data));
};

export const getGlobalData = async (country, month, year, setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${country}&month=${month}&year=${year}`
  );

  setData(response.data.data);
};
