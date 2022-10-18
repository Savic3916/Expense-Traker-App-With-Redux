import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { setExpenses } from '../store/redux/expenses';
import ExpensesOuput from '../components/ExpensesOutput/ExpensesOuput';
import axios from 'axios';

export default function AllExpenses() {

  const allExpense = useSelector((state) => state.myExpenses.expenseArray);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchExpenses(){
      const response = await axios.get('https://savic-react-native-project-default-rtdb.firebaseio.com/expenses.json');

      const expenses = [];

      for(const key in response.data){
        const expensesObj = {
          id: key,
          amount: response.data[key].amount,
          date: response.data[key].date,
          description: response.data[key].description,
        };
        expenses.push(expensesObj);
      }
      dispatch(setExpenses(expenses))
    };
    fetchExpenses();
  }, [])

  return (
    <ExpensesOuput expenses={allExpense} expensesPeriod='Total' fallback='No registered expenses found'/>
  )
}

const styles = StyleSheet.create({})