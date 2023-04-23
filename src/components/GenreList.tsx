import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();

  // if (error) return null;
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List className="list-group">
        {data?.results?.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius="8"
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
