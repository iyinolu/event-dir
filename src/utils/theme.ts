import { createTheme } from "@material-ui/core/styles";
import { MuiPickersOverrides } from "@material-ui/pickers/typings/overrides";

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

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey extends overridesNameToClassKey {}
  export interface ComponentNameToClassKey extends CustomType {}
}

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#19857b",
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
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: "#0f0f0f !important",
        marginBottom: "17px",
        borderRadius: "13px",
        color: "white",
      },
    },
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: "rgb(164 164 164 / 60%)",
      },
      iconButton: {
        backgroundColor: "#0f0f0f",
        color: "white",
      },
      transitionContainer: {
        "& .MuiTypography-root": {
          fontWeight: "700",
          color: "#8a8a8a",
        },
      },
    },
    MuiTypography: {
      colorInherit: {
        color: "white",
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: "#9acd32",
        color: "black",
        "& .MuiTypography-root": {
          color: "black",
          fontWeight: "700",
        },
        "&:hover": {
          backgroundColor: "#9acd32",
          color: "black",
        },
      },
    },
    MuiPickersToolbarButton: {
      toolbarBtn: {
        "& h6": {
          color: "#9acd32 !important",
        },
      },
    },
  },
});

export default theme;
