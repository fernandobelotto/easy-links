import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import NewLinkModal from "../components/NewLinkModal";
import { useAppDispatch, useAppSelector } from "../store";
import { LinkCard } from "./LinkCard";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { links } = useAppSelector((state) => state.links);
  const dispatch = useAppDispatch();

  return (
    <>
      <Box p="5">
        <Heading mb="5">Links</Heading>
        <SimpleGrid columns={12} spacing="5">
          {links.map((link) => {
            return (
              <>
                <LinkCard link={link}></LinkCard>
              </>
            );
          })}
          <Button onClick={() => setIsOpen(true)}>New Link</Button>
        </SimpleGrid>
      </Box>

      <NewLinkModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <DarkModeSwitch />
    </>
  );
};

export default Index;
