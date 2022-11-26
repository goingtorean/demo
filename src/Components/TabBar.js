import { Home, Order, Ring } from '@/Assets/Icons'
import { useTheme } from '@/Hooks'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'

const TabBar = ({ state, descriptors, navigation }) => {
  const { Layout, Gutters, Colors } = useTheme()
  const insets = useSafeAreaInsets()

  const tabStyle = {
    ...Layout.rowHCenter,
    paddingBottom: insets.bottom - 15,
    backgroundColor: Colors.green02,
  }

  const itemTabStyle = {
    ...Layout.fill,
    ...Layout.colVCenter,
    ...Gutters.regularVPadding,
  }

  const itemMiddleTabStyle = {
    ...Layout.center,
    width: 80,
    height: 80,
    top: -40,
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 50,
  }

  const insideItem = {
    ...Layout.center,
    width: 60,
    height: 60,
    backgroundColor: Colors.green01,
    borderRadius: 50,
    shadowColor: Colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }

  const renderIcon = (route, color) => {
    switch (route.name) {
      case 'ScanQR':
        return <Home color={color} />
      case 'Home':
        return <Order color={color} />
      case 'Notification':
        return <Ring color={color} />
      default:
        break
    }
    return
  }

  return (
    <View style={tabStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const color = isFocused ? Colors.primary : Colors.white

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        if (index === 1)
          return (
            <View style={itemTabStyle} key={index.toString()}>
              <TouchableWithoutFeedback
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => navigation.navigate('Home')}
                onLongPress={onLongPress}
              >
                <View style={itemMiddleTabStyle}>
                  <View style={insideItem}>{renderIcon(route, color)}</View>
                </View>
              </TouchableWithoutFeedback>
              <View style={itemTabStyle} />
            </View>
          )

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={itemTabStyle}
            key={index.toString()}
          >
            {renderIcon(route, color)}
            <Text style={[Gutters.smallTMargin, { color }]}>{label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
