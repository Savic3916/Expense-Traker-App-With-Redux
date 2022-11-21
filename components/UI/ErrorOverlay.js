import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Button from './Button'

export default function LoadingOverlay({message, onConfirm}) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.title]}> An error occured! </Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>Okay</Button>
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
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})