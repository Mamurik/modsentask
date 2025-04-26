import { ChangeEvent } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { ErrorMessage, MyInput, MyInputWrapper } from './SearchInput.styled';

interface SearchFormData extends FieldValues {
  search: string;
}

interface SearchInputProps {
  control: Control<SearchFormData>;
  placeholder: string;
}

const SearchInput = ({ control, placeholder }: SearchInputProps) => {
  return (
    <MyInputWrapper>
      <Controller
        name="search"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <MyInput
              maxLength={51}
              placeholder={placeholder}
              value={field.value || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
              $hasError={!!error}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </>
        )}
      />
    </MyInputWrapper>
  );
};

export default SearchInput;
