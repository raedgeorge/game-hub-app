import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <form onSubmit={submitForm}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

interface Props {
  onSearch: (searchText: string) => void;
}
