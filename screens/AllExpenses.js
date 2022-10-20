import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import ExpensesOuput from '../components/ExpensesOutput/ExpensesOuput';

export default function AllExpenses() {

  const allExpense = useSelector((state) => state.myExpenses.expenseArray);

  return (
    <ExpensesOuput expenses={allExpense} expensesPeriod='Total' fallback='No registered expenses found'/>
  )
}

const styles = StyleSheet.create({})