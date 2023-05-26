import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

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

type SelectProps = TypeOptions & {
  ariaLabel: string;
  placeholder: string;
};

export const Select = (selectProps: SelectProps) => {
  const ItemComponent = React.useMemo(() => {
    if (selectProps.type === 'group') {
      return selectProps.options.map((group, groupIndex) => (
        <>
          <GroupItem
            label={group.label}
            value={group.value}
            options={group.options}
          />
          {(groupIndex + 1) < selectProps.options.length && (
            <S.SelectSeparator />
          )}
        </>
      ))
    }

    return selectProps.options.map((item) => (
      <Item key={item.value} value={item.value} label={item.label} />
    )) 
  }, [selectProps.options, selectProps.type])  
  
  return (
    <RadixSelect.Root>
      <S.SelectTrigger aria-label={selectProps.ariaLabel}>
        <RadixSelect.Value placeholder={selectProps.placeholder} />
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