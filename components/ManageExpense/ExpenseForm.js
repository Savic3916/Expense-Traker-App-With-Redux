import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';

import { getFormattedDate } from '../../util/dates';
import Input from './Input';
import Button from '../UI/Button';
import Colors from '../../constants/Colors';

export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValue}) {

  // convert default value to truty
  const isDefaultValue = !!defaultValue;
  
  const [inputs, setInputs] = useState({
                                        amount: {
                                          value: isDefaultValue? defaultValue.amount.toString(): '', 
                                          isValid: true,
                                        }, 
                                        date: {
                                          value: isDefaultValue? defaultValue.date.toString(): '',
                                          isValid: true, 
                                        },
                                        description: {
                                          value: isDefaultValue? defaultValue.description: '',
                                          isValid: true,
                                        }
                                      });

  const valueHandler = (inputIdentifier, enteredValue) => {
    setInputs((currentInputs) => {
      return {...currentInputs, [inputIdentifier]: {value: enteredValue, isValid: true}}
    })
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: getFormattedDate(new Date(inputs.date.value)),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
      setInputs((currentInputs) => {
        return{
          amount: { value: currentInputs.amount.value, isValid: amountIsValid},
          date: {value: currentInputs.date.value, isValid: dateIsValid},
          description: {value: currentInputs.description.value, isValid: descriptionIsValid}
        }
      })
      return;
    }
    onSubmit(expenseData);
  };

  const formIsValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;


  return (
    <View style={styles.form}>
      <Text style={styles.text}> Your Expense </Text>
      <View style={styles.inputsRow}>  
        <Input label='Amount' invalid={!inputs.amount.isValid} style={styles.rowInput} textInputConfig={{keyboardType: 'decimal-pad', onChangeText: (e) => valueHandler('amount', e), value: inputs.amount.value}}/>
        <Input label='Date' invalid={!inputs.date.isValid} style={styles.rowInput} textInputConfig={{placeholder: 'YYYY-MM-DD', maxLength: 10, onChangeText: (e) => valueHandler('date', e), value: inputs.date.value}}/>
      </View>
      <Input label='Description' invalid={!inputs.description.isValid} textInputConfig={{multiline: true, onChangeText: (e) => valueHandler('description', e), value: inputs.description.value}}/>
      {formIsValid? <Text style={styles.errorText}> Invalid input values - please check your entered data </Text>: null}
      <View style={styles.buttons}>
        <Button mode={'flat'} onPress={onCancel} style={styles.button}>Cancel</Button>
        <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: 'center',
    color: Colors.error500,
    margin: 8,
  }
})