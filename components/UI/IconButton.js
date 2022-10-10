import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Ionicons} from '@expo/vector-icons';

export default function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed? styles.pressed: null}>
        <View style={styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color}/>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        marginHorizontal: 8,
        marginVertical: 2,
        padding: 6,
    },
    pressed: {
        opacity: 0.75,
    }
})