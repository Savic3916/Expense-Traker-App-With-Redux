import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';
import ExpensesOuput from '../components/ExpensesOutput/ExpensesOuput'

export default function AllExpenses() {

  const allExpense = useSelector((state) => state.myExpenses.expenseArray);

  return (
    <ExpensesOuput expenses={allExpense} expensesPeriod='Total' fallback='No registered expenses found'/>
  )
}

const styles = StyleSheet.create({})