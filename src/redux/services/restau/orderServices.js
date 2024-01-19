import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/order`;

const getOrder = async (data) => {
  const response = await axios.get(`${url}/getOrderRestaurant/${data}`,
  );
  return response.data;
};
const getRestauDashboard = async (data) => {
  const response = await axios.get(`${url}/getOrdersCompleted/${data}`,
    );
  return response.data;
};

const orderServices = {
  getOrder,
  getRestauDashboard
};
export default orderServices;
