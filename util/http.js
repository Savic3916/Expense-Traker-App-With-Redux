import axios from "axios";

const BACKEND_URL = 'https://savic-react-native-project-default-rtdb.firebaseio.com';

export const storeExpense = (expenseData) => {
    axios.post(BACKEND_URL + '/expenses.json', expenseData);
};
