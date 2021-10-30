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
        backgroundColor: "grey"
      },
      container: {
        width: "400px"
      }
    }
  }
});

export default theme;
