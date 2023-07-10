import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
