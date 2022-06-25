import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'http://192.168.1.5:5000/api/';

export const Login =  (payload) => {
 
      return axios
      .post(`${url}signin`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      

};

export const SignUp =  payload => {
  return axios
      .post(url + 'signup', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
};

export const updateUser =  payload => {
    return   axios.post(`${url}lawyerInfo`, payload, {
      headers: {
        'Content-Type': 'application/json',
      }
})
}

export const getAllLawyers = () => {
  return axios.get(url + 'lawyer');
};

export const storeData =  (key,value) => {
  try {
    AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}
  





export const getData =  (key) => {

    return   AsyncStorage.getItem(key)

}



export const getOneLawyer =  (payload)=>{

  return  axios.post(url+'oneLawyer', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
}

export const sendDemande = (payload, token)=>{

    return axios.post(url+'demande', payload, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
    })
}


export const getDemandesByLawyer =  (payload)=>{

  return  axios.post(url+'demandesByLawyer',payload,{
    headers: {
      'Content-Type': 'application/json',
    },
  } )
} 