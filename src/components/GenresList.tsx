import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenresList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenresList;
