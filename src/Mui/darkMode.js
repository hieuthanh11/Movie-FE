import { createTheme } from "@mui/material";

export const DarkMode = createTheme({
  palette: {
    mode: "dark",
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
      main: "#fff",
      contrastText: "#fff",
    },
    background: {
      paper: "#0C0512",
      default: "#2D1A3D",
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
      fontSize: "3rem",
      fontWeight: "bolder",
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
          "@media (max-width:900px)": {
            minWidth: 300,
          },
          "@media (max-width:600px)": {
            minWidth: 200,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minWidth: 100,
          color: "#8E00FF",
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
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontsize: "10px",
        },
      },
    },
  },
});
