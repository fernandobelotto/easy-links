import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Switch,
  VStack,
  FormErrorMessage,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { useController, useForm } from "react-hook-form";
import { useAppDispatch } from "../store";
import { v4 as uuidv4 } from "uuid";
import { InfoIcon } from "@chakra-ui/icons";
import { CirclePicker } from "react-color";
import sufixImg from "../../public/sufixImg.jpeg";

import { addNewLink } from "../store/links";

export default function NewLinkModal({ isOpen, setIsOpen }: any) {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: "color",
    control,
    defaultValue: "",
  });

  function onSubmit(values: any) {
    console.log(values);
    values.id = uuidv4();
    dispatch(addNewLink(values));
    setIsOpen(false);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalCloseButton></ModalCloseButton>
            <ModalHeader>New Link</ModalHeader>
            <ModalBody>
              <VStack
                spacing={5}
                display="flex"
                alignItems="flex-start"
                w="full"
              >
                <FormControl isInvalid={errors.label}>
                  <FormLabel mb="0">Label</FormLabel>
                  <Input
                    placeholder="my-link-..."
                    {...register("label", {
                      required: "This is required",
                    })}
                  ></Input>
                  <FormErrorMessage>
                    {errors.label && errors.label.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.link}>
                  <FormLabel mb="0" display="flex" alignItems="center">
                    Link
                  </FormLabel>
                  <Input
                    placeholder="http://..."
                    {...register("link", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Minimum length should be 2",
                      },
                    })}
                  ></Input>
                  <FormErrorMessage>
                    {errors.link && errors.link.message}
                  </FormErrorMessage>
                </FormControl>

                <FormLabel mb="0" display="flex" alignItems="center">
                  Color
                </FormLabel>

                <CirclePicker
                  onChange={(color) => onChange(color.hex)}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  inputRef={ref}
                />

                {/* <FormControl isInvalid={errors.name} >
                                    <FormLabel htmlFor='email-alerts' mb='0'>
                                        Add to favorites?
                                    </FormLabel>
                                    <Switch {...register('favorite')} />
                                    <FormErrorMessage>
                                        {errors.favorite && errors.favorite.message}
                                    </FormErrorMessage>
                                </FormControl> */}
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit">Create</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
