/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from '@material-ui/core/styles';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';


type overridesNameToClassKey = {  
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

type CustomType = {
  MuiPickersBasePicker: {
    pickerView: {
      maxWidth?: string;
      backgroundColor?: string;
    };
    container: {
      width?: string;
    };
  }; 
};

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends overridesNameToClassKey {}
  export interface ComponentNameToClassKey extends CustomType {}
}


// A custom theme for this app
const theme = createTheme({

  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#19857b',
    },
  },
  overrides: {
    MuiPickersBasePicker: {
      pickerView: {
        maxWidth: "500px",
        backgroundColor: "#272d37",
        color: "#5f9ea0",
        borderRadius: "13px"
      },
      container: {
        width: "400px",
        background: "#0d1117",
      }
    },
    MuiToolbar: {
      root: {
        backgroundColor: "#5f9ea0 !important",
        marginBottom: "17px",
        borderRadius: "13px",
        color: "white"
      }
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: "rgb(95 158 160 / 60%)"
      },
      iconButton: {
        backgroundColor: "#272d37",
        color: "rgba(0, 0, 0, 0.54)"
      }
    },
    MuiTypography: {
      colorInherit: {
        color: "white"
      }
    }

  }
});

export default theme;
