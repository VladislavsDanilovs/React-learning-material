import {useRef, useContext} from 'react';
import { TodosContext } from '../store/todos-context';
import classes from  './NewTodo.module.css';

/* or instead of React.FC we can define a separate type, as we do it in Todos.tsx */

const NewTodo = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    /* if we would have and event in form, for example onClick, than
    this event type would be React.MouseEvent
    
    alternativly:
    q: How to find event type quickly without much searching each time.
    a: The easiest way for us to find out each event's type is to write an inline event handler and then hover over the 'event' parameter in the anonymous function:
    https://img-c.udemycdn.com/redactor/raw/q_and_a/2022-08-14_09-54-19-10fe48724c9ef617e964b6ba24d8511c.png
    (<form onSubmit={ (event) => console.log(event)}>)


    Then, of course, you delete that and keep your intended implementation.

    */
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // current! means that 100% not null
        const enteredText = todoTextInputRef.current!.value;
       
        if(enteredText.trim().length===0){
            // throw an error
            return;
        }

       todosCtx.addTodo(enteredText);
    };

    return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text"> Todo text </label>
        <input type='text' id='text' ref={todoTextInputRef}/>
        <button> Add Todo </button>
    </form>
    );
};

export default NewTodo;

/*
    htmlFor="text"> is used to point at the text input:
    <input type='text' id='text'> </input>
    so id='text' is connecting the label to it for accessibility.

*/