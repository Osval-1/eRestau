import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/user`;

const getRecentlyViewed = async () => {
  const response = await axios.get(`${config.ENDPOINT}/api/product/getDashboard`,
  // { headers: await authHeader() }
  );
  return response.data;
};
const Search = async () => {
  const response = await axios.post(url+"search" ,data,
  //  { headers: await authHeader() }
   );
  return response.data;
};
const getSingleProduct = async (data) => {
  const response = await axios.post(url + "singleProduct", data, 
  // {
  //   headers: await authHeader(),
  // }
  );
  return response.data;
};
const search = async (data) => {
  const response = await axios.post(url + "search", data,
  //  {
  //   headers: await authHeader(),
  // }
  );
  return response.data;
};

const homeServices = {
  getRecentlyViewed,
  getSingleProduct,
  search,
};
export default homeServices;
