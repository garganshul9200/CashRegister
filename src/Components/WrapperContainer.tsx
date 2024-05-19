import { View, Text } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../styles/colors'
interface props{
  children?:ReactNode,
  containerStyle?:conatinerProps
}
type conatinerProps ={
  width?:number,
  height?:number
}
//colors.honeydew,
const WrapperContainer:FC<props> = ({children, }) => {
  return (
    <View style={{flex: 1,margin: 8, backgroundColor: colors.btnABlue,  }}>
      {children}
    </View>
  )
}

export default WrapperContainer;