import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addExpense, deleteExpense, updateExpense } from '../store/redux/expenses';
import { storeExpense } from '../util/http';
import Colors from '../constants/Colors';
import IconButton from '../components/UI/IconButton';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

export default function ManageExpenses({route, navigation}) {

    // APP STATE
    const allExpense = useSelector((state) => state.myExpenses.expenseArray);
    const dispatch = useDispatch();
  
  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;

  // to let the value remain when we want to update the textInputs
  const selectedExpense = allExpense.find((expense) => expense.id === editedExpenseID);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? 'Edit Expense' : 'Add Expense'
    })
  },[navigation, isEditing]);

  const deleteExpenseHandler = (id) => {
    const toDelete = allExpense.filter((expense) => expense.id !== id)
    dispatch(deleteExpense(toDelete));
    navigation.goBack();
  };
  
  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (id, expenseData) => {
    if(isEditing){

     const particularExpense = allExpense.findIndex((expenses) => expenses.id === id);
     const getObject = allExpense[particularExpense];
     const alterObject = {...getObject, ...expenseData};
     const updatedExpenses = [...allExpense];
     updatedExpenses[particularExpense] = alterObject; 
     const newArray = updatedExpenses;

     dispatch(updateExpense(newArray))
    }else{
      // sending http request
      storeExpense(expenseData);
      
      // // storing in redux
      // let id = new Date().toString() + Math.random().toString();
      // dispatch(addExpense([{id: id, ...expenseData}, ...allExpense]));
    }
    navigation.goBack();
  };

  let editExpenseUI = 
                      <View style={styles.deleteContainer}>
                          <IconButton icon='trash' size={36} color={Colors.error500} onPress={() => deleteExpenseHandler(editedExpenseID)}/>
                      </View>
  return (
    <View style={styles.container}>
      <ExpenseForm 
            onCancel={cancelHandler} 
            submitButtonLabel={isEditing? 'Update': 'Add'} 
            onSubmit={(val) => confirmHandler(editedExpenseID, val)}
            defaultValue={selectedExpense}
      />
      {isEditing? editExpenseUI: null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center'
  },
})