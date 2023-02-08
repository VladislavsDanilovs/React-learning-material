// interface Todo {
//     id: string;
//     text: string;

// }

// export default Todo;

 
class Todo {
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString(); 
    }
}

export default Todo;

/* 
Q: Is there any special reason to select class method instead of the described type or interface method?

A: Use a class when you need custom logic in it, otherwise always use an interface since this is only available at compile time. A typescript interface is not compiled to javascript since it does not exist in javascript.
*/