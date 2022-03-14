import { Box, Link, Text } from "@chakra-ui/react";
import DeletePopover from "./DeletePopover";

export function LinkCard(props) {
  return (
    <>
      <Box
        p="3"
        border="1px solid"
        borderColor="gray.500"
        shadow="md"
        rounded="md"
        bg={props.link.color}
        display="flex"
        flexDir="row"
        justifyContent="space-between"
      >
        <Link href={props.link.link} target="_blank">
          <Text>{props.link.label}</Text>
        </Link>
        <DeletePopover id={props.link.id} />
      </Box>
    </>
  );
}
