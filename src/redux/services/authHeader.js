import * as SecureStore from 'expo-secure-store';


//get token from securestore asynchronously
 export const getToken = async(key)=>{
   try{
      let token = await SecureStore.getItemAsync(key)
      return token
   }catch(err){
      console.log(err)
   }
}
//generate authorization header 
export default async function authheader (){
   try{
   const usertoken = await getToken("user")
   if(usertoken){
    return{'x-access-token': usertoken}
   }
}catch(err){
   console.log(err)
}
}
