import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/${config.API_VERSION}/api/restau`;


const editProfile = async (data) => {
  const response = await axios.get(url + "singleProduct", data, {
    // headers: await authHeader(),
  });
  return response.data;
};
const homeServices = {
  editProfile,
};
export default homeServices;
