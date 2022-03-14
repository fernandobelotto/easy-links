import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { removeLink } from "../store/links";

export default function DeletePopover({ id }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeLink(id));
  };
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        autoFocus={false}
        closeOnBlur={true}
        closeOnEsc={true}
      >
        <PopoverTrigger>
          <IconButton
            aria-label="delete"
            icon={<DeleteIcon />}
            size="xs"
            onClick={open}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Delete Link</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to delete this link? you will have to create a
            new link
          </PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
