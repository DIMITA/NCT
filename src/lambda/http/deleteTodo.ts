import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { Todo } from '../../models/Todo';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId

    // TODO: Remove a TODO item by id

    const t = new Todo;

    const nb = t.todos.length;
    t.todos = [...t.todos.filter(todo => todo.todoId !== todoId)];

    if(t.todos.length < nb){

      return {
        statusCode: 200,
        headers: {
        },
        body: JSON.stringify({
          status: "OK",
          message: "DELETED"
         })
      };
    } else {
      return {
        statusCode: 404,
        headers: {
        },
        body: JSON.stringify({
          status: "NOT FOUND",
          message: "No Todo found for todoId: "+ todoId
         })
      };
    }
     
  }
