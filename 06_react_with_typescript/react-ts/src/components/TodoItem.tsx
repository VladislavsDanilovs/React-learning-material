import { MouseEventHandler } from 'react';
import classes from './TodoItem.module.css'

type todoItemProps = {
  onRemoveTodo: () => void;
  todoText: string;
};

const TodoItem = (props: todoItemProps) => {
    return <li className={classes.item} onClick={props.onRemoveTodo} > {props.todoText} </li>
};

export default TodoItem;