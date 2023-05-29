import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { trigger, content, contentArrow } from './Tooltip.styles';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className={trigger()} asChild>
          {children}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content className={content()} sideOffset={5}>
            {text}
            <RadixTooltip.Arrow className={contentArrow()} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>

      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
