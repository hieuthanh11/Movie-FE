import { createTheme } from "@mui/material";

export const LightMode = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#008000",
    },
    primary: {
      light: "#931BF3",
      main: "#8E00FF",
      dark: "#7300CE",
    },
    secondary: {
      light: "#715E7D",
      main: "#0C0512",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#F2DFFF",
    },
    action: {
      active: "#8E00FF",
      hover: "#E0E0E0",
      selected: "#8E00FF",
    },
  },
  typography: {
    h2: {
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },
    h3: {
      fontWeight: "bolder",
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      "@media (max-width:900px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      "@media (max-width:900px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    p: {
      "@media (max-width:900px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    span: {
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    body1: {
      color: "#fff",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    body2: {
      color: "#fff",
      fontSize: "20px",
      fontWeight: "bold",
    },
    button: {
      textTransform: "initial",
      textAlign: "left",
      alignItems: "flex-start",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 500,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minWidth: 100,
          color: "#0C0512",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#8E00FF",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          color: "#715E7D",
        },
        displayedRows: {
          color: "#715E7D",
        },
      },
    },
  },
});
