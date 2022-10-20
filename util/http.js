import axios from "axios";

const BACKEND_URL = 'https://savic-react-native-project-default-rtdb.firebaseio.com';

export const storeExpense = async(expenseData) => {
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
};

export async function updateExpenes(id, expenseData){
    axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export async function deleteExpenses(id){
    axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};