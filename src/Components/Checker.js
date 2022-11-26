import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import { Check } from '@/Assets/Icons'

const Checker = () => {
  const { Common, Colors } = useTheme()
  const [check, setCheck] = useState(false)

  const background = {
    backgroundColor: check ? Colors.green01 : Colors.white,
  }

  const onPress = () => {
    setCheck(!check)
  }

  return (
    <TouchableOpacity onPress={onPress} style={[Common.checker, background]}>
      <Check color={Colors.white} />
    </TouchableOpacity>
  )
}

export default Checker
