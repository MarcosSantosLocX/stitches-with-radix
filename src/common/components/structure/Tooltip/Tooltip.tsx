import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { trigger, content, contentArrow } from './Tooltip.styles';

export const Tooltip = () => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className={trigger()} asChild>
          <p>Hover me</p>
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content className={content()} sideOffset={5}>
            Great job
            <RadixTooltip.Arrow className={contentArrow()} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>

      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
