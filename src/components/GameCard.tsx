import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticStore from "./CriticStore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <CriticStore score={game.metacritic}></CriticStore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

interface Props {
  game: Game;
}
