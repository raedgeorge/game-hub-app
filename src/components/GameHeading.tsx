import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

export const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${
    genre?.name || ''
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
