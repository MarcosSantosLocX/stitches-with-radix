import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

import { SelectOption } from '../types';

import * as S from './Item.styles';

type SelectItemProps = SelectOption;

const SelectItem =React.forwardRef<HTMLDivElement, SelectItemProps>(({
  label,
  value,
}, forwardedRef) => {
  return (
    <S.SelectItem value={value} ref={forwardedRef}>
      <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
      <S.SelectItemIndicator>
        <CheckIcon />
      </S.SelectItemIndicator>
    </S.SelectItem>
  );
});


SelectItem.displayName = 'SelectItem';

export default SelectItem;