import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/product/`;

async function getAllMenu(data) {
  const response = await axios.get(
    url + `getAllProductsBySingleUser/${data}`
    // {
    //   headers: await authHeader(),
    // }
  );
  return response.data;
}
async function updateSingleMenu(data) {
  const response = await axios.patch(
    url + data
    //  {
    //   headers: await authHeader(),
    // }
  );
  return response.data;
}
async function addSingleMenu(data) {
  const response = await axios.post(url + "createProduct", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
async function deleteSingleMenu(data) {
  const response = await axios.delete(
    url + data
    //  {
    //   headers: await authHeader(),
    // }
  );
  return response.data;
}

const menuServices = {
  getAllMenu,
  updateSingleMenu,
  addSingleMenu,
  deleteSingleMenu,
};
export default menuServices;
