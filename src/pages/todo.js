import React, { useReducer } from 'react'
import { PageContainer } from '../components/PageContainer'
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

const Todo = () => {
  const { todos, addTodo, ...restOfTodoActions } = useTodos();

  return (
    <PageContainer pageTitle="To Do List">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        {...restOfTodoActions}
      />
    </PageContainer>
  )
}

export default Todo
