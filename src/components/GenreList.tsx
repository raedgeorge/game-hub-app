import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List className="list-group">
      {data.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius="8"
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
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
  );
};

export default GenreList;

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
