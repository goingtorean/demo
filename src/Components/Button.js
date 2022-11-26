import { Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'

const Button = ({ style, title = 'button' }) => {
  const { Common, Fonts, Colors } = useTheme()
  return (
    <View style={[Common.button.rounded, style]}>
      <Text style={[Fonts.textRegular, { color: Colors.white }]}>{title}</Text>
    </View>
  )
}

export default Button
