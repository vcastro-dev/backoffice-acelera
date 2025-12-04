import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const BRAND_BLUE = '#009ddb';
const STATUS_GREEN = '#28a745';
const STATUS_INFO_BLUE = '#3B82F6';
const STATUS_RED = '#DC3545';
const WHITE = '#FFFFFF';

export const CustomPreset = definePreset(Aura, {
  name: 'custom-preset',
  primitive: {
    gray: {
      50: '#F8F7F7',
    },
  },
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: BRAND_BLUE,
          contrast: WHITE,

          hover: {
            color: '#0B84DB',
            contrast: WHITE,
          },
        },

        success: {
          color: STATUS_GREEN,
          contrast: WHITE,
        },
        info: {
          color: STATUS_INFO_BLUE,
          contrast: WHITE,
        },
        danger: {
          color: STATUS_RED,
          contrast: WHITE,
        },

        surface: {
          ground: '#F8F7F7',
        },
      },
      dark: {},
    },
  },
  components: {
    card: {
      root: {
        shadow: '0px 0.25rem 1rem -0.125rem #18191A29',
        borderRadius: '0.25rem',
      },
    },
  },
});
