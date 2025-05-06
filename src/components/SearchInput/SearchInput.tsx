import { ChangeEvent, useCallback } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { ErrorMessage, MyInput, MyInputWrapper } from './styled';

interface SearchFormData extends FieldValues {
  search: string;
}

interface SearchInputProps {
  control: Control<SearchFormData>;
  placeholder: string;
}

const SearchInput = ({ control, placeholder }: SearchInputProps) => {
  const handleChange = useCallback(
    (onChange: (value: string) => void) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
    []
  );

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
              onChange={handleChange(field.onChange)}
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
