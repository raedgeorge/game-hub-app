import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;

interface Props {
  game: Game;
}
