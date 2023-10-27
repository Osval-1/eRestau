import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/restau`;

const getDashboard = async () => {
  const response = await axios.get(url + "dashboard", {
    headers: await authHeader(),
  });
  return response.data;
};
const editProfile = async (data) => {
  const response = await axios.get(url + "singleProduct", data, {
    headers: await authHeader(),
  });
  return response.data;
};
const homeServices = {
  getDashboard,
  editProfile,
};
export default homeServices;
