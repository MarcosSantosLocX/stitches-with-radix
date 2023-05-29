import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import Item from './components/Item';

import { SelectOption } from './types';

import * as S from './Select.styles';

type SelectProps = RadixSelect.SelectProps & {
  ariaLabel: string;
  placeholder: string;
  options: SelectOption[];
};

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(({
  ariaLabel,
  placeholder,
  options,
  ...props
}, forwardRef) => (
  <RadixSelect.Root {...props}>
    <S.SelectTrigger aria-label={ariaLabel}>
      <RadixSelect.Value placeholder={placeholder} ref={forwardRef} />
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
          {options.map((item) => (
            <Item
              key={item.value}
              value={item.value}
              label={item.label}
            />
          ))}
        </S.SelectViewport>

        <S.SelectScrollDownButton>
          <ChevronDownIcon />
        </S.SelectScrollDownButton>
      </S.SelectContent>
    </RadixSelect.Portal>
  </RadixSelect.Root>
));

Select.displayName = 'Select';

