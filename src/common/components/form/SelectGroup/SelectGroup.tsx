import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import GroupItem from './components/GroupItem';

import { SelectGroupOption } from './types';

import * as S from './SelectGroup.styles';

type SelectGroupProps = RadixSelect.SelectProps & {
  ariaLabel: string;
  placeholder: string;
  options: SelectGroupOption[];
};

export const SelectGroup = ({ ariaLabel, placeholder, options, ...props }: SelectGroupProps) => (
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
          {
            options.map((group, groupIndex) => (
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
        </S.SelectViewport>

        <S.SelectScrollDownButton>
          <ChevronDownIcon />
        </S.SelectScrollDownButton>
      </S.SelectContent>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);