import { StyleSheet } from 'react-native';

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import Colors from './constants/Colors';
import IconButton from './components/UI/IconButton';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator(); 

function ExpensesOverview(){
  return(
    <BottomTabs.Navigator screenOptions={({navigation}) => (
      {
        headerStyle: {backgroundColor: Colors.primary500},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: Colors.primary500},
        tabBarActiveTintColor: Colors.accent500,
        headerRight: ({tintColor}) => {
          return (
            <IconButton icon={'add'} size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpense')}}/>
          )
        }
      }
    )}>
      <BottomTabs.Screen 
        name='RecentExpenses' 
        component={RecentExpenses} 
        options={{title: 'Recent Expenses', tabBarLabel: 'Recent', tabBarIcon: ({color, size}) => <Ionicons name='hourglass' color={color} size={size}/>}}
        />
      <BottomTabs.Screen 
        name='AllExpenses' 
        component={AllExpenses} 
        options={{title: 'All Expenses', tabBarLabel: 'All Expenses', tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size}/>}}
        />
    </BottomTabs.Navigator>
  )
}


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: Colors.primary500}, headerTintColor: 'white'}}>
            <Stack.Screen name='ExpenseOverview' component={ExpensesOverview} options={{headerShown: false}}/>
            <Stack.Screen name='ManageExpense' component={ManageExpenses} options={{presentation: 'modal'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
