import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesList from './ExpensesList'
import Colors from '../../constants/Colors'


export default function ExpensesOuput({expenses, expensesPeriod, fallback}) {

  let content;

  if(expenses.length > 0 ){
    content =  <ExpensesList expenses={expenses}/>
  }else{
    content = <Text style={styles.infoText}>{fallback}</Text>
  }
  return (
    <View style={styles.container}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  }
})