import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
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
