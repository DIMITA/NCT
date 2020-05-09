import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { Todo } from '../../models/Todo'
import { getUserId } from '../utils'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body)

  // TODO: Implement creating a new TODO item
  
  if(newTodo == undefined || newTodo == null) { 

  const res: any = { message: 'The body of request have no content' };   
  
     return res;
    } else { 

      const todo: any = { 
        newTodo,
        userId : getUserId(event)
       };
      const todoItem = new Todo;
      todoItem.create(todo);
      const res: any = {
        statusCode: 200,
        headers: {
        },
        body: JSON.stringify({
          status: "ok",
          message: "Added succefully"
         })
      };
      
         return res;
        }
  
}
