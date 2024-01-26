import axios from "axios"
import config from "../../../../project.config"
import authHeader from "../authHeader"

const url = `${config.ENDPOINT}/${config.API_VERSION}/api/order/`

const setCart= async (data)=>{
   const response = await axios.post(url+"createOrder",data,
    // {headers:await authHeader()}
    )
   return response.data
}

const cartServices = {
    setCart
}
export default cartServices