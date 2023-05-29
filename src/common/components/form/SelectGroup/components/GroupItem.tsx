import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

import { SelectGroupOption } from '../types';

import * as S from './GroupItem.styles';

type SelectGroupItemProps = SelectGroupOption;

const SelectGroupItem = React.forwardRef<HTMLDivElement, SelectGroupItemProps>(({
  label,
  value,
  options
}, forwardedRef) => {
  return (
    <RadixSelect.Group>
      <S.SelectLabel>{label}</S.SelectLabel>
      {options.map(option => (
        <S.SelectItem key={option.value} value={option.value} ref={forwardedRef}>
          <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
          <S.SelectItemIndicator>
            <CheckIcon />
          </S.SelectItemIndicator>
        </S.SelectItem>
      ))}
    </RadixSelect.Group>
  );
});

SelectGroupItem.displayName = 'SelectGroupItem';

export default SelectGroupItem;