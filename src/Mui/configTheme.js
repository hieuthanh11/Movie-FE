import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { DarkMode } from "./darkMode";
import { LightMode } from "./lightMode";

const Theme = (props) => {
  const { darkMode } = useSelector((state) => {
    return state.MuiReducer;
  });
  const { children } = props;
  const defaultTheme = darkMode ? DarkMode : LightMode;
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const WithTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
