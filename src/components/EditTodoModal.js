import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Text,
} from '@chakra-ui/react'

export const EditTodoModal = ({ isOpen, onClose, onSubmit, currentTodoMessage })  => {
  const { register, handleSubmit, errors } = useForm();

  const handleEdit = (data) => {
    onSubmit({ message: data.newTodo })
    onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(handleEdit)}>
              <Input
                defaultValue={currentTodoMessage}
                name="newTodo"
                placeholder="Enter new todo message"
                ref={register({ required: true })}
              />
              {errors.newTodo && <Text color="red">You can't enter an empty todo</Text>}
               <ModalFooter>
                <Button variant="ghost">Close</Button>
                <Button type="submit"colorScheme="blue" mr={3}>
                  Edit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  )
}