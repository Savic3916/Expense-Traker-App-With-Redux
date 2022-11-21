import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color='white' size='large'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: Colors.primary700,
    }
})