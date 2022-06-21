import axios from 'axios'
const url = "http://172.16.11.127:5000/api/"
class HelpersController {
    

    Login = async (payload)=>{

        try {
            const data = await axios.post(url+"signin", payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res)=>{
                return res.data
            }).catch((err)=>{
                console.log(err);
                return err.data
            })
            
        } catch (error) {

            console.log(error);

        }

    }

    SignUp = async (payload)=>{
        try {
            const data = axios.post(`${url}signup`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(data);
            return data
            
        } catch (error) {
            console.log(error);
            
        }
    }



    storeData = async (key,value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
            } catch (e) {
                console.log(e);
            }
        }



        getData = async (key) => {
            try {
                const jsonValue = await AsyncStorage.getItem(key)
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
                console.log(e);
            }
        }

}



export default HelpersController;