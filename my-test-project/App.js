import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
      Alert.alert('Warning', 'Are you sure that you want to delete this todo?', [
        {text: 'Yes', onPress: () => {
            setTodos((prevTodos) => {
              return prevTodos.filter((todo) => todo.key != key);
          });
        }},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ])   
  }

  const submitHandler = (text) => {
    if(todos.find((todo) => todo.text == text)){
      Alert.alert('Info', 'This todo already exists!', [
        {text: 'Understood', onPress: console.log('alert closed')}
      ]);
    }else{
      if(text.length > 3){
        setTodos((prevTodos) => {
          return [
            {text: text, key: Math.random().toString()},
            ...prevTodos];
        });
      }else{
        Alert.alert('OOPS', 'ToDodd must be at least 3 chars long', [
          {text: 'Understood', onPress: () => console.log('alert closed')}
        ]);
      }
    } 
  }
              
  return (
    <TouchableWithoutFeedback onPress={() =>{
        Keyboard.dismiss();
    }}>
        <View style={styles.container}>
        <Header/>
          <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
              <View style={styles.list}>
                  <FlatList 
                      data={todos}
                      renderItem={({item}) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                      )} 
                  />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,   
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
