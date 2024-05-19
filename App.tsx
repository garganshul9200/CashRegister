
import React, { useEffect } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import WrapperContainer from './src/Components/WrapperContainer';
import { height, width } from './src/styles/responsiveSize';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])

  return (
      <Routes />
    // <NavigationContainer>
    //   <WrapperContainer >
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <TouchableOpacity onPress={() => { return }}
    //         style={{
    //           // flexDirection: 'row',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           borderColor: 'black',
    //           borderWidth: 1,
    //           padding: 8,
    //         }}>
    //         <Text style={{
    //           fontSize: 24,
    //           fontWeight: 'bold'
    //         }}>details.js</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </WrapperContainer>
    // </NavigationContainer>
  );
}

export default App;
