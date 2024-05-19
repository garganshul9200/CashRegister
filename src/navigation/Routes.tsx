import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import navigationStrings from '../constants/navigationStrings'

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Routes = () => {
    const Stack = createNativeStackNavigator();
    const userData = true

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen component={MainStack} name={navigationStrings.MAINSTACK}/> 
                    <Stack.Screen component={AuthStack} name={navigationStrings.AUTHSTACK} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;