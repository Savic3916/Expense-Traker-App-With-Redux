import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Colors from '../../constants/Colors'
import { getFormattedDate } from '../../util/dates'

export default function ExpenseItem({id, description, amount, date}) {

    const navigation = useNavigation();

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {
            expenseID: id,
        })
    }

  return (
    <Pressable onPress={expensePressHandler} style={({pressed}) => pressed? styles.pressed: null} android_ripple={{color: 'gray'}}>
        <View style={styles.expenseItem}> 
            <View>
                <Text style={[styles.textBase, styles.description]}> {description} </Text>
                <Text style={styles.textBase}> {date} </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}> {amount.toFixed(2)} </Text>
            </View>
        </View>
    
    </Pressable>
  )
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: Colors.gray500,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textBase: {
        color: Colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: 80,

    },
    amount: {
        color: Colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    }
})