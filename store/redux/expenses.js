import { createSlice } from '@reduxjs/toolkit';
import { getFormattedDate } from '../../util/dates';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.98,
      date: getFormattedDate(new Date('2022-07-12')),
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: getFormattedDate(new Date('2022-01-05')),
    },
    {
      id: 'e3',
      description: 'Some Bananas',
      amount: 5.99,
      date: getFormattedDate(new Date('2021-12-01')),
    },
    {
      id: 'e4',
      description: 'A Bag',
      amount: 14.99,
      date: getFormattedDate(new Date('2022-05-03')),
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: getFormattedDate(new Date("2022-08-10")),
    }
  ];

const expensesSlice = createSlice({
    name: 'expense',
    initialState: {
        expenseArray: DUMMY_EXPENSES,
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenseArray = action.payload;
        },
        deleteExpense: (state, action) => {
            state.expenseArray = action.payload;
        },
        updateExpense: (state, action) => {
            state.expenseArray = action.payload;
        },
    }
})

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
