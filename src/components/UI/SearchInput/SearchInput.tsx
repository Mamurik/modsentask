import { ChangeEvent, FC } from 'react';
import { MyInput, MyInputWrapper } from './SearchInput.styled';

interface SearchInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  placeholder,
  value,
}) => {
  return (
    <MyInputWrapper>
      <MyInput placeholder={placeholder} value={value} onChange={onChange} />
    </MyInputWrapper>
  );
};

export default SearchInput;
