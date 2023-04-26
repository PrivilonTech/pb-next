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
