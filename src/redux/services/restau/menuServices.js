import axios from "axios"
import config from "../../../../project.config"
import authHeader from "../authHeader"

const url = `${config.ENDPOINT}/api`
async function getMenu(data){
 const response = await axios.get(url,{headers: await authHeader(),})
    return response.data
}
async function updateMenu(data){
    const response = await axios.post(url+"updateMenu",data,{headers: await authHeader()})
}
