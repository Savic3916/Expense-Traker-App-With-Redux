import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expenses';

export const store =  configureStore({
    reducer: {
        myExpenses: expenseReducer,
    },
})