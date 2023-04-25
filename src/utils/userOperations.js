import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://v1.nocodeapi.com/sukrit_04/fbsdk/WNyOtwxWrtyRFXeH/getAllUsers"
  );

  return response.data.users;
};

export const getUser = async (userId) => {
  const response = await axios.get(
    `https://v1.nocodeapi.com/sukrit_04/fbsdk/WNyOtwxWrtyRFXeH/getUser?uid=${userId}`
  );

  return response.data;
};
