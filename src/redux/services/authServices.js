import axios from "axios";
import config from "../../../project.config.js";
import * as SecureStore from "expo-secure-store";

const url = `${config.ENDPOINT}/api/auth`;

const signup = async (data) => {
  const response = await axios.post(`${url}/signup`, data);

  return response.data;
};
const signin = async (data) => {
  const response = await axios.post(`${url}/signin`, data);
  if (response.data.accessToken) {
    const key = "user"
    const value = response.data.accessToken
    await SecureStore.setItemAsync(key,value)
  }
  return response.data;
};



const authServices = {
  signup,
  signin,
};

export default authServices;
