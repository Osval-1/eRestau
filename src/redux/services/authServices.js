import axios from "axios";
import config from "../../../project.config.js";
import * as SecureStore from "expo-secure-store";

const url = `${config.ENDPOINT}/api/auth`;
const firstLaunch = true;

const signup = async (data) => {
  const response = await axios.post(`${url}/signup`, data);
  await SecureStore.setItemAsync("FIRST_LAUNCH", true);
  return response.data;
};
const signin = async (data) => {
  const response = await axios.post(`${url}/signin`, data);
  if (response.data) {
    const userData = JSON.stringify({
      id: response.data.id,
      location: response.data.location,
      username: response.data.username,
      phone: response.data.phone,
    });
    console.log(userData);
    await SecureStore.setItemAsync("userToken", response.data.accessToken);
    await SecureStore.setItemAsync("userRole", response.data.roles[0]);
    await SecureStore.setItemAsync("userData", userData);
  }
  console.log(response.data);
  return response.data;
};

const logout = async () => {
  await SecureStore.deleteItemAsync("userToken");
  await SecureStore.deleteItemAsync("userRole");
};
const getTokenAsync = async () => {
  try {
    let token = await SecureStore.getItemAsync("userToken");
    let userRole = await SecureStore.getItemAsync("userRole");
    let userData = JSON.parse(await SecureStore.getItemAsync("userData"));
    return { token, userRole, userData };
  } catch (error) {
    console.log(error);
  }
};

const authServices = {
  signup,
  signin,
  logout,
  getTokenAsync,
};

export default authServices;
