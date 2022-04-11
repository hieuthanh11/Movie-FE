import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
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
    card: {
      background:
        "linear-gradient(90deg,  rgba(126,126,126,0.7404003837863271) 0%, rgba(0,0,0,0.0046948356807511304) 100%)",
      display: "flex",
      alignItems: "center",
      margin: "20px 50px",
      borderRadius: "20px",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    info: {
      marginLeft: 50,
      [theme.breakpoints.down("sm")]: {
        marginLeft: 10,
        marginBottom: 20,
      },
    },
    title: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "15px",
      },
    },

    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
    },
    image: {
      borderRadius: "20px",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    date: {
      display: "flex",
      margin: "10px 0",
    },
    rate: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    icon: {
      margin: "10px 0",
      [theme.breakpoints.down("sm")]: {
        marginRight: "40px",
      },
    },
    filmImage: {
      width: "250px",
      height: "300px",
      display: "block",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  };
});

export default styles;
