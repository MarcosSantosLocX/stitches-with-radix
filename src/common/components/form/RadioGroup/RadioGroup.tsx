import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

import { Label } from '@/common/components/structure/Typography/Typography';

import * as S from './RadioGroup.styles';

type Option = {
  label: string;
  value: string;
}

type RadioProps = RadixRadioGroup.RadioGroupProps & {
  options: Option[];
};

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioProps>((
  { options, ...props }, forwardRef
) => {
    return (
      <S.RadioGroupRoot {...props} ref={forwardRef}>
        {
          options.map(option => (
            <S.Flex key={option.value}>
              <S.RadioGroupItem value={option.value} id={option.value}>
                <S.RadioGroupIndicator />
              </S.RadioGroupItem>
              <Label htmlFor={option.value}>{option.label}</Label>
            </S.Flex>
          ))
        }
      </S.RadioGroupRoot>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
