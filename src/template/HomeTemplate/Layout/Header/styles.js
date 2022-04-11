import { makeStyles } from "@mui/styles";
const styles = makeStyles((theme) => {
  return {
    header: {
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper,
      padding: "10px 0",
    },
    bgTooolbar: {
      backgroundColor: theme.palette.background.paper,
    },

    drawerContainer: {
      padding: "20px 30px",
    },
    nav: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      listStyle: "none",
    },
    navLink: {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: "bolder",
    },
    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
      color: "#fff",
    },
    navTopic: {
      display: "inline-block",
      margin: "0 50px",
    },
    langMob: {
      marginLeft: "30px",
    },
    switchMob: {
      marginLeft: "30px",
    },
  };
});

export default styles;
