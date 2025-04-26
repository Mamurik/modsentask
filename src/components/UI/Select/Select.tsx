import React, { useState } from 'react';
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

const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Select Item');

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

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
