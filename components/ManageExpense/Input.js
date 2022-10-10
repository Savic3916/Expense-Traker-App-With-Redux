import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

import Colors from '../../constants/Colors'

export default function Input({label, invalid, style, textInputConfig}) {

  const inputStyles = [styles.input];

  if(textInputConfig.multiline){
    inputStyles.push(styles.inputMultiline);
  };

  if(invalid){
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid? styles.invalidLabel:null]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.primary100,
    color: Colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    color: Colors.error500,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  }
})