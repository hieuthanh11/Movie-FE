import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    banner: {
      backgroundImage: "url(../../../../assets/img/slider4.jpg)",
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
        height: 320,
      },
    },
    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
      width: "250px",
    },
    brand: {
      textAlign: "center",
      margin: "20px 0",
    },
    content: {
      padding: "0 24px",
      margin: "50px 0",
    },
    time: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    timeItem: {
      [theme.breakpoints.down("md")]: {
        width: "30%",
        margin: "0 50px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 50px",
      },
    },
  };
});

export default styles;
