import axios from "axios";
import config from "../../../../project.config";
import authHeader from "../authHeader";

const url = `${config.ENDPOINT}/api/product/`;

async function getMenu() {
  const response = await axios.get(url+"getProducts",
  // {
  //   headers: await authHeader(),
  // }
  );
  // console.log(response.data)
  return response.data;
}
async function updateMenu(data) {
  const response = await axios.patch(url + "updateMenu", data, {
    headers: await authHeader(),
  });
  return response.data;
}
async function setMenu(data) {
  const response = await axios.post(url+"image", data,{headers:{
    "Content-Type":"multipart/form-data",
  }})
  // return response.data;
}
async function deleteMenu(data) {
  const response = await axios.delete(url + "deleteMenu", data, {
    headers: await authHeader(),
  });
  return response.data;
}

const menuServices = {
  getMenu,
  updateMenu,
  setMenu,
  deleteMenu,
};
export default menuServices;
