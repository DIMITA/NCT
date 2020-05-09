import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { Todo } from '../../models/Todo'
import { getUserId } from '../utils';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // TODO: Get all TODO items for a current user

  const todos = new Todo;

  const userTodos = todos.todos.find(todo => todo.userId === getUserId(event))
  return {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify({
      status: "ok",
      data: userTodos
     })
  };
}
