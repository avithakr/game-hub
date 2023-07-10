import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={'60px'}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
