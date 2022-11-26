/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.border,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      checker: {
        width: 25,
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.green01,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.green01,
      },
      check: {
        width: 15,
        height: 15,
      },
    }),
  }
}
