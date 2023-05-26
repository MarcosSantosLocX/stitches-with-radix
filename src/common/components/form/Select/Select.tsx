import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import GroupItem from './components/GroupItem';
import Item from './components/Item';

import { SelectOption, SelectGroupOption } from './types';

import * as S from './Select.styles';

type TypeOptions = {
  type: 'item',
  options: SelectOption[];
} | {
  type: 'group',
  options: SelectGroupOption[];
}

type SelectProps = RadixSelect.SelectProps & TypeOptions & {
  ariaLabel: string;
  placeholder: string;
};

export const Select = ({ ariaLabel, placeholder, type, options, ...props }: SelectProps) => {
  const ItemComponent = React.useMemo(() => {
    if (type === 'group') {
      return options.map((group, groupIndex) => (
        <>
          <GroupItem
            key={group.value}
            label={group.label}
            value={group.value}
            options={group.options}
          />
          {(groupIndex + 1) < options.length && (
            <S.SelectSeparator />
          )}
        </>
      ))
    }

    return options.map((item) => (
      <Item key={item.value} value={item.value} label={item.label} />
    )) 
  }, [options, type])  
  
  return (
    <RadixSelect.Root {...props}>
      <S.SelectTrigger aria-label={ariaLabel}>
        <RadixSelect.Value placeholder={placeholder} />
        <S.SelectIcon>
          <ChevronDownIcon />
        </S.SelectIcon>
      </S.SelectTrigger>
      <RadixSelect.Portal>
        <S.SelectContent>
          <S.SelectScrollUpButton>
            <ChevronUpIcon />
          </S.SelectScrollUpButton>
  
          <S.SelectViewport>
            {ItemComponent}
          </S.SelectViewport>
  
          <S.SelectScrollDownButton>
            <ChevronDownIcon />
          </S.SelectScrollDownButton>
        </S.SelectContent>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
};