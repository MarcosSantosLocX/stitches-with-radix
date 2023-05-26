import { Inter } from "next/font/google";
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { violet, gray, mauve, red } from '@radix-ui/colors'

const inter = Inter({
    subsets: ["latin"],
    fallback: ["sans-serif"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...violet,
      ...gray,
      ...mauve,
      ...red
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px'
    },
    fontSizes: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem'
    },
    fonts: {
      system: `${inter.style.fontFamily}`,
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      circle: '100%',
    }
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    mobile: '(max-width: 600px)',
    tablet: '(min-width: 600px)',
    laptop: '(min-width: 768px)',
    desktop: '(min-width: 992px)',
    screemsXlarge: '(min-width: 1200px)',
  },
})
