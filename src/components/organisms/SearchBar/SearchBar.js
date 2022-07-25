import { Input } from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo, SearchResultItem } from './SearchBar.stylrs';
import { useStudents } from 'hooks/useStudenst';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();
  
  const getMatchingStudents = debounce(async ({inputValue}) => {
    const { students } = await findStudents(inputValue);

    setMatchingStudents(students);
  }, 500); 

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
   items: matchingStudents,
   onInputValueChange: getMatchingStudents,
  })

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper  {...getComboboxProps()} >
        <Input {...getInputProps()} name="Search" id="Search" placeholder={'Search...'}/>
          <SearchResults isVisitible={isOpen && matchingStudents.length > 0 } {...getMenuProps()}>
            {isOpen &&  matchingStudents.map((item , index) => (
              <SearchResultItem highlighted={highlightedIndex === index} {...getItemProps({item, index})} key={item.id}>{item.name}</SearchResultItem>
            ))}
          </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
