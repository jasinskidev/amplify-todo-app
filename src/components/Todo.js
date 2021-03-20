import React, { useState} from 'react'
import {
  Flex,
  Text,
  Button,
  VStack,
  ButtonGroup,
  Checkbox,
  useDisclosure
} from '@chakra-ui/react';
import { EditTodoModal } from './EditTodoModal';

export const Todo = ({ todo, deleteTodo, editTodo, checkTodo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showButtons, setShowButtons] = useState(false);

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      onMouseOver={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      position="relative"
    >
      <Checkbox isChecked={todo.checked} onChange={(e) => checkTodo(e.target.checked)} size="lg" />
      <Text
        color={todo.checked ? 'grey' : 'black'}
        mx={10}
        textDecoration={todo.checked ? 'line-through' : 'none'}
      >
        {todo.message}
      </Text>
      <ButtonGroup position="absolute" left="100%">
        <Button
          opacity={Number(showButtons)}
          onClick={onOpen}
          colorScheme="teal"
          size="sm"
        >
          Edit
        </Button>
        <Button
          opacity={Number(showButtons)}
          onClick={deleteTodo}
          colorScheme="red"
          size="sm"
        >
          Delete
        </Button>
      </ButtonGroup>
      <EditTodoModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={editTodo}
        currentTodoMessage={todo.message}
      />
    </Flex>
  )
}
