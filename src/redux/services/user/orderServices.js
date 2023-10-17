import axios from "axios"
import config from "../../../../project.config"
import authHeader from "../authHeader"

const url = `${config.ENDPOINT}/api/user/order`

const getOrder= async ()=>{
    const response = await axios.post(url,data,{headers:await authHeader()})
    return response.data
 }
 
 const orderServices = {
     getOrder
 }
 export default orderServices