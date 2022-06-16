import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { LandingPage } from './src/screens/landingPage';
import {LoginForm} from './src/screens/loginForm'
import {SignUpForm} from './src/screens/signUp'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%'
    }
  })

  return (
    <NavigationContainer>
        <SafeAreaProvider >
          <ApplicationProvider {...eva} theme={eva.light}>
          <ScrollView contentInsetAdjustmentBehavior="automatic"  contentContainerStyle={Styles.container}>
          <Stack.Navigator  initialRouteName='signup'>
                <Stack.Screen name= 'landingPage' component={LandingPage}/>
                <Stack.Screen name= 'login' component={LoginForm}/>
                <Stack.Screen name= 'signup' component={SignUpForm}/>
              </Stack.Navigator>
              {/* <LoginForm/> */}
          </ScrollView>

          </ApplicationProvider>
        </SafeAreaProvider>
    </NavigationContainer>
    
  );
};
export default App;
