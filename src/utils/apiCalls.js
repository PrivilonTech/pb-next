import axios from "axios";
import { cloneDeep } from "lodash";
import secureLocalStorage from "react-secure-storage";

import { categorizeData, structureDataGlobal } from "./structureData";
import { formatDate_DD_MM, formatGraphDataInAscendingOrder } from "./dateArray";
import { updateUserInfoByEmail } from "./utilsUser";

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

  let label;

  if (name.toLowerCase() === "crude") {
    label = `${selectedCountry} (USD/bbl)`;
  } else if (name.toLowerCase() === "va") {
    label = `${selectedCountry} (RMB/Mt)`;
  } else {
    label = `${selectedCountry} (US$/MT)`;
  }

  setData({
    labels: formatDate_DD_MM(response.data.data.key),
    datasets: [
      {
        label,
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

  const mumbai = cities[0] === "Mumbai" ? cities[0] : cities[1];
  const cifNs = cities[0] === "CIF NS" ? cities[0] : cities[1];

  setData({
    labels: response.data.data?.[cifNs]?.date
      ? formatDate_DD_MM(response.data.data[cifNs]?.date)
      : response.data.data?.[cifNs]?.date,
    datasets: [
      {
        label: getCityLabel(cifNs),
        data: response.data.data?.[cifNs]?.value,
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
    labels: response.data.data?.[mumbai]?.date
      ? formatDate_DD_MM(response.data.data[mumbai]?.date)
      : response.data.data?.[mumbai]?.date,
    datasets: [
      {
        label: getCityLabel(mumbai),
        data: response.data.data?.[mumbai]?.value,
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

  const reversedData = response.data.reverse();

  setData(reversedData);
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

const RAZOR_PAY_API_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

export const makePayment = async (payload, setLoading, handleRedirect) => {
  try {
    const currentUser = secureLocalStorage.getItem("user");

    const { amount, name, email, plan } = payload;

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const response = await fetch("/api/makePayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const data = await response.json();

    const options = {
      key: RAZOR_PAY_API_KEY,
      name,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id, //change this
      description: "Understanding RazorPay Integration",
      handler: async function (response) {
        console.log("RESPONSE", response);

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        const additionalData = {
          plan,
          subscriptionAmount: amount,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          signature: razorpay_signature,
          subscribed: true,
        };

        await updateUserInfoByEmail(
          email,
          {
            ...additionalData,
          },
          setLoading
        );

        secureLocalStorage.setItem("user", {
          ...currentUser,
          ...additionalData,
        });

        handleRedirect();
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  } catch (error) {
    console.log(error);
  }
};

const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const getCityLabel = (city) => {
  if (!city) return;

  const formattedCity = city.toLowerCase();

  if (formattedCity === "mumbai") return "EX Mumbai, ( Rs/Kg - Incl.GST )";
  if (formattedCity === "cif ns") return "CIF NS,Mumbai ( US$Mt)";

  return city;
};
