import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react';
import { Todo } from './Todo';
export const TodoList = ({ todos, deleteTodo, editTodo, checkTodo }) => (
  <>
    <VStack spacing="20px">
      {React.Children.toArray(
        todos.map(todo => (
          <Todo
            todo={todo}
            deleteTodo={() => deleteTodo(todo)}
            editTodo={(newTodo) => editTodo(todo, newTodo)}
            checkTodo={(checked) => checkTodo(todo, checked)}
          />
        ))
      )}
    </VStack>
  </>
)
