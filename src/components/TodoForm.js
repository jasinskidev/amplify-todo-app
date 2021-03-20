import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Input, Flex, Button, Text } from '@chakra-ui/react';
import { uid } from 'uid';

export const TodoForm = ({ addTodo }) => {
  const { register, handleSubmit, errors } = useForm();
  const [currentTodo, setCurrentTodo] = useState('');

  const onSubmit = (data) => {
    addTodo({ id: uid(), message: data.todo, checked: false })

    setCurrentTodo('')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" align="center" mb={10}>
        <Input
          name="todo"
          size="lg"
          placeholder="Type thing which you need to do"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          ref={register({ required: true })}
          />
          {errors.todo && <Text color="red">You can't enter an empty todo</Text>}
        <Button type="submit" my={4} w={['50%', '30%']} colorScheme="blue">Add to the list</Button>
      </Flex>
    </form>
  )
}
