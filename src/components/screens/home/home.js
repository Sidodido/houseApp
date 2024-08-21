import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants'
import Header from '../../header'
export default function Home() {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: colors.white}}>

      <View style={{flex: 1,backgroundColor: colors.white}}>

<Header title={"Home"}/>
      </View>

    </SafeAreaView>
  )
}