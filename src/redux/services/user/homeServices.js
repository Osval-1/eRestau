import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/user`;

const getDashboard = async () => {
  const response = await axios.get(url+'dashboard',{ headers: await authHeader() });
  return response.data;
};
const Search = async () => {
  const response = await axios.post(url+"search" ,data, { headers: await authHeader() });
  return response.data;
};
const getSingleProduct = async (data) => {
  const response = await axios.post(url + "singleProduct", data, {
    headers: await authHeader(),
  });
  return response.data;
};
const search = async (data) => {
  const response = await axios.post(url + "search", data, {
    headers: await authHeader(),
  });
  return response.data;
};

const homeServices = {
  getDashboard,
  getSingleProduct,
  search,
};
export default homeServices;
