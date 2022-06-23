import axios from 'axios';
import {updateEmail} from '../redux/slices/LawyerInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'http://172.16.11.127:5000/api/';

export const Login = async payload => {
  try {
    const data = await axios
      .post(`${url}signup`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return err.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = async payload => {
  try {
    const data = await axios
      .post(url + 'signup', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async payload => {
  try {
    const data = await axios.post(`${url}lawyerInfo`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllLawyers = () => {
  return axios.get(url + 'lawyer');
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
