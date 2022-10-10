import { StyleSheet, Pressable, View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed}) => pressed? styles.pressed: null}>
        <View style={[styles.button, mode === 'flat'? styles.flat:null]}>
            <Text style={[styles.buttonText, mode === 'flat'? styles.flatText: null]}>{ children }</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: Colors.primary500,

    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: Colors.primary200,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    }
})