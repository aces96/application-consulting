import * as React from 'react';
import {View} from 'react-native';
import {LoginTitle} from '../components/auth.components/title';
import {INPUT} from '../components/auth.components/input';
import {Text} from '@rneui/themed';
import {SignInButton} from '../components/auth.components/buttons';
import {useState} from 'react';
import {getAllLawyers, Login, storeData, getDemandesByLawyer, getOneLawyer} from '../assets/helpers/helpers';
import {UserCheckBox} from '../components/auth.components/input';
import {useDispatch} from 'react-redux';
import {addLawyers} from '../assets/redux/slices/lawyers.slice';
import {addEmail} from '../assets/redux/slices/clientInfo.slice'
import  {updateEmail} from '../assets/redux/slices/LawyerInfo'


export const LoginForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [clientToggle, setClientToggle] = useState(false);
  const [avocatToggle, setAvocatToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const Styles = {
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
  };

  const handlePassword = text => {
    setPassword(text);
    console.log(email);
  };
  const handleEmail = text => {
    setEmail(text);
    console.log(email);
  };

  const handleClientToggle = () => {
    setClientToggle(true);
    setAvocatToggle(false);
    setRole('client');
  };
  const handleAvocatToggle = () => {
    setClientToggle(false);
    setAvocatToggle(true);
    setRole('avocat');
  };

  const handleSubmit = async () => {

    console.log('here');


    setLoading(true);
    const payload = {
      email: email,
      password: password,
      role: role,
    };
    let data = await Login(payload);
    console.log(data.data.token);



    const storage = await storeData(email, {
      token: data.data.token,
    });
    if (role == 'avocat') {
      dispatch(updateEmail(email))
    
    navigation.navigate('lawyerHome');


    } else if (role == 'client') {

    let data = await getAllLawyers();

      console.log('jjjjj : ', data);
      dispatch(addLawyers(data.data.avocat));
      dispatch(addEmail(email))
      console.log('jjjjj 2 : ', data.data.avocat);
      setLoading(false);
      navigation.navigate('clienthome')
    }
  };

  return (
    <View style={Styles.container}>
      <LoginTitle />
      <INPUT
        handleChange={handleEmail}
        type="email"
        error={false}
        placeholder="enter your email"
      />
      <INPUT
        handleChange={handlePassword}
        error={false}
        secure={true}
        placeholder="enter your password"
      />
      <View
        style={{
          width: '80%',
          justifyContent: 'space-between',
          marginBottom: 10,
          flexDirection: 'row',
        }}>
        <UserCheckBox
          handleToggle={handleAvocatToggle}
          Toggle={avocatToggle}
          title="avocat"
        />
        <UserCheckBox
          handleToggle={handleClientToggle}
          Toggle={clientToggle}
          title="client"
        />
      </View>
      <View style={{width: '90%', alignItems: 'flex-end', marginBottom: 30}}>
        <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>
          forgot password!
        </Text>
      </View>
      <SignInButton
        loading={loading}
        handleSubmit={handleSubmit}
        title="Submit"
      />
      <View style={{width: '90%', alignItems: 'center'}}>
        <Text>don't have account ?</Text>
        <Text style={{color: '#2155CD', textDecorationLine: 'underline'}}>
          Registre now
        </Text>
      </View>
    </View>
  );
};
