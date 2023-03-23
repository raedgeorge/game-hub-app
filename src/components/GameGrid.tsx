import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/gamescc")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {games.map((game) => (
          <li className="list-group-item" key={game.id}>
            {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}
