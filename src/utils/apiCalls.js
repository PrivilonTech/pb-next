import axios from "axios";
import { categorizeData, structureDataGlobal } from "./structureData";
import { formatDate_DD_MM, formatGraphDataInAscendingOrder } from "./dateArray";
import { cloneDeep } from "lodash";

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
    labels: formatDate_DD_MM(response.data.data.key),
    datasets: [
      {
        label: selectedCountry,
        data: response.data.data.value,
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
          ];
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);

          return gradientBg;
        },
        borderColor: ["#d9232a"],
        borderWidth: 2.5,
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

  setCityCategory(response.data.data[0]?.city);
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

//graph/historicaldata
export const getHistoricalData = async (
  category,
  year,
  setData,
  setSecondaryData,
  setIsLoading
) => {
  const response = await axios(
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=${category}&year=${year}`
  );

  const clonedResponse = cloneDeep(response);

  const cities = Object.keys(response.data.data);
  const coreData = formatGraphDataInAscendingOrder(
    clonedResponse.data.data,
    response.data.data
  );

  response.data.data = coreData;

  setData({
    labels: response.data.data?.[cities[0]]?.date
      ? formatDate_DD_MM(response.data.data[cities[0]]?.date)
      : response.data.data?.[cities[0]]?.date,
    datasets: [
      {
        label: cities[0],
        data: response.data.data?.[cities[0]]?.value,
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
          ];
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);

          return gradientBg;
        },
        borderColor: ["#d9232a"],
        borderWidth: 2.5,
      },
    ],
  });

  setSecondaryData({
    labels: response.data.data?.[cities[1]]?.date
      ? formatDate_DD_MM(response.data.data[cities[0]]?.date)
      : response.data.data?.[cities[0]]?.date,
    datasets: [
      {
        label: cities[1],
        data: response.data.data?.[cities[1]]?.value,
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
          ];
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);

          return gradientBg;
        },
        borderColor: ["#d9232a"],
        borderWidth: 2.5,
      },
    ],
  });

  setIsLoading(false);
};

//global/citywise
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

  setData(response.data.data.reverse());
  setIsLoading(false);
};

//events
export const getEventsData = async (setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/events`
  );

  setData(response.data);
};

//images
export const getCarouselData = async (setData) => {
  const response = await axios.get(
    `https://polymerbazar-be.onrender.com/api/carousels/`
  );

  setData(response.data);
};

export const sendMail = async (to, subject, content) => {
  try {
    await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        subject,
        content,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
