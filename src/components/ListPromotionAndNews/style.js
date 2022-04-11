import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    "@global": {
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
    },

    banner: {
      backgroundImage: "url(../../../../assets/img/slider1.jpg)",
      height: 400,
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(0deg, rgba(12,5,18,1) 0%, rgba(12,5,18,0.8748541652989321) 0%, rgba(12,5,18,0.20258525773590685) 100%)",
        [theme.breakpoints.down("md")]: {
          height: "80%",
        },
        [theme.breakpoints.down("sm")]: {
          height: "70%",
        },
      },
      [theme.breakpoints.down("sm")]: {
        height: 300,
      },
    },

    listNew: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    newItem: {
      position: "relative",
      backgroundColor: theme.palette.background.default,
      margin: "50px 20px",
      width: "28%",
      borderRadius: "20px",
      overflow: "hidden",
      "&:hover $img": {
        transition: "all .3s linear",
        transform: "scale(1.09)",
      },
      [theme.breakpoints.down("md")]: {
        width: "40%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    topic: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    img: {
      display: "block",
      width: "100%",
      height: "200px",
    },
    content: {
      padding: "20px",
    },
    control: {
      overflow: "hidden",
    },
    eventDate: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
      position: "absolute",
      padding: "10px 12px",
      top: 0,
      left: "10%",
      borderRadius: "0 0 30px 30px",
      zIndex: 10,
    },
    title: {
      height: "70px",
    },
    navLink: {
      textDecoration: "none",
    },
  };
});

export default styles;
