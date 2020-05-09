import { TodoItem } from "./TodoItem";


export class Todo implements TodoItem { 
    

    userId: string
    todoId: string
    createdAt: string
    name: string
    dueDate: string
    done: boolean
    attachmentUrl?: string


    todos: Todo[] = [];    
    

       generate (length){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    create (todo: Todo) {
        todo.todoId = this.generate(5);
        todo.createdAt = new Date().toString();

        this.todos = [...this.todos, todo as Todo]
    }

    

 }