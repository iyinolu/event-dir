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
        backgroundColor: "#0f0f0f",
        color: "#5f9ea0",
        borderRadius: "13px",
        paddingBottom: "21px",
        paddingTop: "12px",
      },
      container: {
        width: "400px",
        background: "black",
      }
    },
    MuiToolbar: {
      root: {
        backgroundColor: "#0f0f0f !important",
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
        backgroundColor: "#0f0f0f",
        color: "white"
      }
    },
    MuiTypography: {
      colorInherit: {
        color: "white"
      }
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: "#9acd32",
        color: 'black',
        fontWeight: "500",
      }
    }

  }
});

export default theme;
