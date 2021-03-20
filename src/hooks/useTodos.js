import { useReducer } from 'react';

const todosReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'EDIT':
      return state.map(todo => {
        if (todo.id === action.payload.todo.id) {
          return {
            ...todo,
            message: action.payload.newTodo.message
          }
        }

        return todo;
      })
    case 'CHECK':
      return state.map(todo => {
        if (todo.id === action.payload.todo.id) {
          return {
            ...todo,
            checked: action.payload.checked
          }
        }

        return todo;
      })
    default:
      throw new Error(`Action of type ${action.type} is not supported in todosReducer`)
  }
}

const initialTodos = [];

export const useTodos = () => {
  const [state, dispatch] = useReducer(todosReducer, initialTodos);

  const addTodo = (todo) => dispatch({ type: 'ADD', payload: todo });
  const deleteTodo = (todo) => dispatch({ type: 'DELETE', payload: todo });
  const editTodo = (todo, newTodo) => dispatch({ type: 'EDIT', payload: { todo, newTodo } });
  const checkTodo = (todo, checked) => dispatch({ type: 'CHECK', payload: { todo, checked } })

  return {
    todos: state,
    addTodo,
    deleteTodo,
    editTodo,
    checkTodo,
  }
}