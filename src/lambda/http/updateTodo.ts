import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'
import { Todo } from '../../models/Todo'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId
  const updatedTodo: UpdateTodoRequest = JSON.parse(event.body)

  // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object

  const todo = new Todo;
  
  let todoFind : Todo = todo.todos.find(todo => todo.todoId === todoId);

        
        if(!todoFind){

          const res: any = {
            statusCode: 404,
            headers: {
            },
            body: JSON.stringify({
              status: "NOT FOUND",
              message: "No Todo found for id: "+ todoId
             })
          };
            return res;
        }

        if(updatedTodo.hasOwnProperty('done')){
            todoFind.done = updatedTodo.done
        }

        if(updatedTodo.name){
            todoFind.name = updatedTodo.name
        }

        if(updatedTodo.dueDate){
            todoFind.dueDate = updatedTodo.dueDate
        }

        const updateTodos = this.todos.map(t => t.todoId !== todoId ? t: todoFind)

        this.todos = [...updateTodos];

        const res: any = {
          statusCode: 200,
          headers: {
          },
          body: JSON.stringify({
            status: "ok",
            message: "Updates succefully",
            todoId: todoId, 
            data : todoFind
           })
        };

        return res;
        
  
}
