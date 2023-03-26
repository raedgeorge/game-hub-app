import { Badge } from "@chakra-ui/react";

const CriticStore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX="2"
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticStore;

interface Props {
  score: number;
}
