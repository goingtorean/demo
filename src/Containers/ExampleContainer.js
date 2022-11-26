import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button, Checker } from '@/Components'
import { useTheme } from '@/Hooks'

const ExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView style={Layout.fill} showsVerticalScrollIndicator={false}>
      <Text
        style={[
          Fonts.titleSmall,
          Gutters.regularHMargin,
          Gutters.regularVMargin,
        ]}
      >
        Add Organization
      </Text>
      <View
        style={[
          Layout.fill,
          Common.backgroundPrimary,
          Gutters.regularHPadding,
          Gutters.regularVPadding,
          Gutters.xLargeBPadding,
        ]}
      >
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Organization name'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Organization address'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'City/Town'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Province'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.rowHCenter, Gutters.regularVMargin]}>
          <Checker />
          <Text style={[Fonts.textSmall, Gutters.smallLMargin]}>
            Contact person same as Owner
          </Text>
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Contact Person Name*'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Contact Person Surname*'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Cellphone Number*'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <View style={[Layout.row, Layout.rowHCenter]}>
          <TextInput
            placeholder={'Email'}
            maxLength={1}
            selectTextOnFocus
            style={[Layout.fill, Common.textInput]}
          />
        </View>
        <Button
          title={'Submit'}
          style={[Gutters.largeHMargin, Gutters.regularVMargin]}
        />
      </View>
    </ScrollView>
  )
}

export default ExampleContainer
