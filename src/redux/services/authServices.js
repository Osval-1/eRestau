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
  const token =  await SecureStore.getItemAsync('user')
  return {...response.data,
    token:token }
};

const logout = async () => {
  await SecureStore.deleteItemAsync('user')
};


const authServices = {
  signup,
  signin,
  logout
};

export default authServices;
