import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const BRAND_BLUE = '#009ddb';
const STATUS_GREEN = '#28a745';
const STATUS_INFO_BLUE = '#3B82F6';
const STATUS_RED = '#DC3545';
const WHITE = '#FFFFFF';

export const CustomPreset = definePreset(Aura, {
  name: 'custom-preset',
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
          ground: '{color.gray.50}',
          default: '{color.white}',
        },
      },
      dark: {},
    },
  },
  components: {
    card: {
      root: {
        shadow: '0px 4px 16px -2px #18191A29',
      },
    },
  },
});
