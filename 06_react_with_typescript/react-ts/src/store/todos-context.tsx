import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
}
// exporting that to use it in useContext
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: 
React.FC<React.PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addToDoHanlder = (todoText: string) => {
      const newTodo = new Todo(todoText);
    
     setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos( (prevTodos) => {
          return prevTodos.filter(todo => todoId !== todo.id)
        } )
        console.log('Item is deleted!');
      }

      const contextValue: TodosContextObj  = {
        items: todos,
        addTodo: addToDoHanlder,
        removeTodo: removeTodoHandler
      }

    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
};

export default TodosContextProvider;