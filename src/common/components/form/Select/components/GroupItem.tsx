import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';

import { SelectGroupOption } from '../types';
import SelectItem from './Item';

import * as S from './Item.styles';

type SelectGroupItemProps = SelectGroupOption;

const SelectGroupItem = React.forwardRef<HTMLDivElement, SelectGroupItemProps>(({
  label,
  value,
  options
}, forwardedRef) => {
  return (
    <RadixSelect.Group key={value}>
      <S.SelectLabel>{label}</S.SelectLabel>
      {options.map(option => (
        <SelectItem
          key={option.value}
          label={option.label}
          value={option.value}
          ref={forwardedRef}
        />
      ))}
    </RadixSelect.Group>
  );
});

SelectGroupItem.displayName = 'SelectGroupItem';

export default SelectGroupItem;