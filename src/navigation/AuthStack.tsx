import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings';
import { StackNavigationProp } from '@react-navigation/stack';

const AuthStack = () => {
    const navigation =useNavigation<StackNavigationProp<any>>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={()=>navigation.navigate(navigationStrings.MAINSTACK)}>Go to MainStack</Text>

    </View>
  )
}

export default AuthStack