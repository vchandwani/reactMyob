import { createMuiTheme } from '@material-ui/core/styles';
import { Overrides as CoreOverrides } from '@material-ui/core/styles/overrides';
import { AlertClassKey, AutocompleteClassKey } from '@material-ui/lab';
import { CSSProperties } from '@material-ui/styles';

interface Overrides extends CoreOverrides {
  MuiAlert?:
    | Partial<Record<AlertClassKey, CSSProperties | (() => CSSProperties)>>
    | undefined;
  MuiAutoComplete?:
    | Partial<
        Record<AutocompleteClassKey, CSSProperties | (() => CSSProperties)>
      >
    | undefined;
}

// default font
export const fonts = {
  main: 'Open Sans',
  fixedWidth: 'Roboto Mono',
};

const customColors = {
  primary: {
    main: '#4e4d52',
    hover: '#7a7882',
  },
  secondary: {
    main: '#300a3d',
    hover: '#54116b',
  },
};

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: fonts.main,
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: {
      fontSize: '4.2rem',
      fontWeight: 600,
      lineHeight: '2.2rem',
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1.8rem',
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
      marginBottom: '1.8rem',
      color: customColors.primary.main,
    },
    button: {
      fontSize: '1.4rem',
      textTransform: 'none',
      fontWeight: 600,
      boxShadow: 'none',
    },
  },
  palette: {
    primary: {
      main: customColors.primary.main,
    },
    secondary: {
      main: customColors.secondary.main,
    },
  },
});

const { palette } = theme;
const overridesOptions: { overrides: Overrides } = {
  overrides: {
    MuiInput: {
      root: {
        '& > .MuiInput Adornment-positionEnd': {
          marginTop: '0.5rem',
        },
      },
      underline: {
        '&:before': {
          borderBottom: `2px ${customColors.primary.hover} ${palette.divider}`,
        },
        '&:after': {
          borderBottom: `2px ${customColors.secondary.hover} ${palette.primary.dark}`,
        },
      },
    },
  },
};
theme.overrides = overridesOptions.overrides;
export default theme;
