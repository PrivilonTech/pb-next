import axios from "axios";
import { categorizeData } from "./structureData";

//crude
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

//citywise/city
export const getIndianData = async (city, setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/${city}`
  );

  setData(response.data.data);
};

//citywise
export const getCityData = async (setCity, setCityCategory, setCityNames) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise`
  );

  setCityCategory(response.data.data[0].city);
  setCityNames(categorizeData(response.data.data));
  setCity(response.data.data);
};

//global
export const getGlobalData = async (country, month, year, setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${country}&month=${month}&year=${year}`
  );

  setData(response.data.data.data);
};

//crude/historicaldata
export const getHistoricalData = async (
  polymer,
  year,
  setData,
  selectedOption
) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=${polymer}&year=${year}`
  );

  setData({
    labels: response.data[selectedOption].date,
    datasets: [
      {
        label: selectedOption,
        data: response.data[selectedOption].value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });
};
