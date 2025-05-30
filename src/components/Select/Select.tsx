import { useCallback, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import {
  Arrow,
  OptionItem,
  OptionsList,
  SelectButton,
  SelectWrapper,
} from './styled';

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

  const renderOptions = () => {
    return options.map((option) => (
      <OptionItem key={option} onClick={() => handleOptionClick(option)}>
        {option}
      </OptionItem>
    ));
  };

  return (
    <SelectWrapper>
      <SelectButton onClick={toggleOptions}>
        {selectedOption}
        <Arrow>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</Arrow>
      </SelectButton>

      {isOpen && <OptionsList>{renderOptions()}</OptionsList>}
    </SelectWrapper>
  );
};

export default Select;
