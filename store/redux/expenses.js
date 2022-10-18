import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
    name: 'expense',
    initialState: {
        expenseArray: [],
    },
    reducers: {
        setExpenses: (state, action) => {
            state.expenseArray = action.payload;
        },
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
export const setExpenses = expensesSlice.actions.setExpenses;
export default expensesSlice.reducer;
