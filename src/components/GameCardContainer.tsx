import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={"300px"} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;

interface Props {
  children: ReactNode;
}
