import { StyleSheet} from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';
import ExpensesOuput from '../components/ExpensesOutput/ExpensesOuput'
import { getDaysMinusDate } from '../util/dates';

export default function RecentExpenses() {
 
  const allExpense = useSelector((state) => state.myExpenses.expenseArray);

  const recentExpenses = allExpense.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDate(today, 7);
    if((expense.date >= date7DaysAgo) && (expense.date <= today)){
      return expense.date;
    }
  })

  return (
    <ExpensesOuput expenses={recentExpenses} expensesPeriod='Last 7 days' fallback='No expenses registered for the last 7 days'/>
  )
}

const styles = StyleSheet.create({})