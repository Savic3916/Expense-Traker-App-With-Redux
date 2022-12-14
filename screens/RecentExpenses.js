import { StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { getDaysMinusDate, getFormattedDate } from '../util/dates';
import { setExpenses } from '../store/redux/expenses';
import ExpensesOuput  from '../components/ExpensesOutput/ExpensesOuput';
import axios from 'axios'; 
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

export default function RecentExpenses() {
 
  // APP WIDE state
  const allExpense = useSelector((state) => state.myExpenses.expenseArray);
  const dispatch = useDispatch();

  // useState
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchExpenses(){
      setIsFetching(true);
      try {
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
        dispatch(setExpenses(expenses.reverse()))
      } catch (error) {
        setError('Could not fetch expenses')
      }
      setIsFetching(false)
    };
    fetchExpenses();
  }, []);

  function errorHandler(){
    setError(null)
  };

  if(error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }
  

  if(isFetching){
    return <LoadingOverlay/>
  }
  const recentExpenses = allExpense.filter((expense) => {
    // todays date
    const todaysDate = getFormattedDate(new Date());
    // expenses date
    const expenseDate = expense.date;
    // date 7 days ago
    const dateSevenDaysAgo = getFormattedDate(getDaysMinusDate(new Date(), 7));

    if(expenseDate <= todaysDate && expenseDate > dateSevenDaysAgo){
      return expense;
    }
  });


  return (
    <ExpensesOuput expenses={recentExpenses} expensesPeriod='Last 7 days' fallback='No expenses registered for the last 7 days'/>
  )
}

const styles = StyleSheet.create({})