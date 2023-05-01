import axios from "axios";
import { categorizeData, structureDataGlobal } from "./structureData";

//crude
export const getCrudeData = async (
  name,
  country,
  selectedOption,
  setData,
  setIsLoading,
  selectedCountry
) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock?name=${name}&country=${country}&type=${selectedOption}`
  );

  setData({
    labels: response.data.data.key,
    datasets: [
      {
        label: selectedCountry,
        data: response.data.data.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });

  setIsLoading(false);
};

//citywise/city
export const getIndianData = async (city, setData, setIsLoading) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/${city}`
  );

  setData(response.data.data);
  setIsLoading(false);
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
export const getGlobalData = async (
  country,
  month,
  year,
  setData,
  setLoading
) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${country}&month=${month}&year=${year}`
  );

  setData(structureDataGlobal(response.data.data.data));
  setLoading(false);
};

//crude/historicaldata
export const getHistoricalData = async (
  category,
  year,
  setData,
  setSecondaryData,
  setIsLoading
) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=${category}&year=${year}`
  );

  const cities = Object.keys(response.data.data);

  setData({
    labels: response.data.data[cities[0]]?.date,
    datasets: [
      {
        label: cities[0],
        data: response.data.data[cities[0]]?.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });

  setSecondaryData({
    labels: response.data.data[cities[1]]?.date,
    datasets: [
      {
        label: cities[1],
        data: response.data.data[cities[1]]?.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });

  setIsLoading(false);
};

//global
export const getTextData = async (
  country,
  month,
  year,
  setData,
  setIsLoading
) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/blogs?type=${country}&year=${year}&month=${month}`
  );

  setData(response.data.data);
  setIsLoading(false);
};
