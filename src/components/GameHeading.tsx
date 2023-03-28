import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

interface Props {
  gameQuery: GameQuery;
}
