import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardConatiner from './GameCardConatiner';
import { Genre } from '../hooks/useGenres';
import { Platform } from './../hooks/usePlatforms';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardConatiner key={skeleton}>
            <GameCardSkeleton />
          </GameCardConatiner>
        ))}
      {games.map((game) => (
        <GameCardConatiner key={game.id}>
          <GameCard game={game} />
        </GameCardConatiner>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
