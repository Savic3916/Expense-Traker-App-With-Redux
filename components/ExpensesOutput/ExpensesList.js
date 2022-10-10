import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({expenses}) {
  const renderExpenseItem = (itemData) => {
    return(
        <ExpenseItem id={itemData.item.id} description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.date}/>
    )};

  return (
   <FlatList 
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
   /> 
  )
}

const styles = StyleSheet.create({
  
})