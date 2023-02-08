import {useContext } from 'react';

import TodoItem from "./TodoItem";
import { TodosContext } from '../store/todos-context'
import classes from './Todos.module.css';

const Todos = () => {
 
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((todo) => (
        <TodoItem key={todo.id} todoText={todo.text} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}/>
      ))}
    </ul>
  );
};

/* bind() is a default method in JS which allows to pre-configure a function for future execution. 
first parameter is: what this keyword will refer in onRemoveTodo(), in our case it doesnt matter
second parametr , setting the first argument onRemoveTodo() which will recieve later 
bcs in App.tsx we will need that todo.id in removeTodoHandler()
*/

export default Todos;