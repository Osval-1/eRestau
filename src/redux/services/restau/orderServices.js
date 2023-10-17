import axios from "axios"
import config from "../../../../project.config"
import authHeader from "../authHeader"

const url = `${config.ENDPOINT}/api/restau/order`

const getOrder= async ()=>{
    const response = await axios.post(url,{headers:await authHeader()})
    return response.data
 }
 
 const orderServices = {
     getOrder
 }
 export default orderServices