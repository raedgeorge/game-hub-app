import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

export const GameHeading = ({ gameQuery }: Props) => {

  const { data: genres } = useGenres();
  const genre = genres?.results.find(genre => genre.id === gameQuery.genreId);

  const { data: platforms } =  usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

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
