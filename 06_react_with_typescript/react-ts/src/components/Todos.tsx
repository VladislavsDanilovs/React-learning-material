import { useState } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

type todosProps = { todos: Todo[]; onRemoveTodo: (id: string) => void };
 


const Todos = (props: todosProps) => {
 
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todoText={todo.text} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}/>
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