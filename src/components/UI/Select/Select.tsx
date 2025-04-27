import { useCallback, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Arrow,
  OptionItem,
  OptionsList,
  SelectButton,
  SelectWrapper,
} from './Select.styled';

interface SelectProps {
  options: string[];
  onSelect: (value: string) => void;
}

const Select = ({ options, onSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Item');

  const toggleOptions = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (option: string) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    },
    [onSelect]
  );

  return (
    <SelectWrapper>
      <SelectButton onClick={toggleOptions}>
        {selectedOption}
        <Arrow>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</Arrow>
      </SelectButton>

      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default Select;
