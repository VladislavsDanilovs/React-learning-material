
import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
const [todos, setTodos] = useState<Todo[]>([]);
const [onDeleteItem, setOnDeleteItem] = useState(null);

const removeTodoHandler = (todoId: string) => {
  setTodos( (prevTodos) => {
    return prevTodos.filter(todo => todoId !== todo.id)
  } )
  console.log('Item is deleted!');

}

const addToDoHanlder = (todoText: string) => {
  const newTodo = new Todo(todoText);

  /* using function from bcs we want update our state based on previous state.
  concat creates a new array, which we should do, bcs we dont want to mutate existing array, 
  we should return a new array, which then will be used as a new state.    */
  setTodos((prevTodos) => {
    return prevTodos.concat(newTodo);
  });
};



  // const todos = [
  //   new AdvancedTodo(new Date().toISOString(), 'Learn React 1'),
  //   new AdvancedTodo(new Date().toISOString(),'Learn TypeScript')
  // ];

  return (
    <div>
      <NewTodo onAddToDo={addToDoHanlder} />
      <Todos todos={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

// class AdvancedTodo implements Todo{
//   id: string;
//   text: string;
  
//   constructor(id: string, text: string){
//     this.id = id;
//     this.text = text;
//   }

// }

export default App;
