import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/${config.API_VERSION}/api/user`;
 const searchUrl = `${config.ENDPOINT}/${config.API_VERSION}/api/product`
 const tokenUrl =`${config.ENDPOINT}/${config.API_VERSION}` 

const getRecentlyViewed = async () => {
  const response = await axios.get(`${config.ENDPOINT}/${config.API_VERSION}/api/product/getDashboard`,
  // { headers: await authHeader() }
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

// to replace this with the original when it gets implemented in the backend
const search = async (data) => {
  const response = await axios.get(`${searchUrl}/search?q=${data}` ,
  //  {
  //   headers: await authHeader(),
  // }
  );
  return response.data;
};
const uploadToken = async (data) => {
  const response = await axios.post(`${tokenUrl}/api/create-user-token`, data);
  return response.data;
};

const homeServices = {
  getRecentlyViewed,
  getSingleProduct,
  search,
  uploadToken
};
export default homeServices;
