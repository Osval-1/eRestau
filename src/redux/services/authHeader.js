import * as SecureStore from 'expo-secure-store';


//get token from securestore asynchronously
 export const getToken = async(key)=>{
  let token = await SecureStore.getItemAsync(key)
  return token
}
//generate authorization header 
export default async function authheader (){
   const usertoken = getToken("user")
   if(usertoken){
    return{'x-access-token': usertoken}
   }
}