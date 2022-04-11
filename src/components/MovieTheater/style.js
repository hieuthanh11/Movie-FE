import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    root: {
      margin: "50px 0",
    },
    img: {
      width: 70,
      height: 70,
      borderRadius: "50%",
    },
    filmImg: {
      width: "100%",
      height: "100px",
      [theme.breakpoints.down("md")]: {
        width: "100px",
        height: "100px",
      },
    },

    detail: {
      textAlign: "left",
    },
    rapImg: {
      width: 50,
      height: 50,
      [theme.breakpoints.down("sm")]: {
        width: 40,
        height: 40,
      },
    },

    time: {
      display: "flex",
      flexWrap: "wrap",
      gap: 5,
    },
    topic: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "60px",
        textAlign: "center",
      },
    },
    theaterLogo: {
      margin: "50px 0",
      display: "flex",
      height: 300,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        height: 1000,
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        height: 700,
      },
    },
    theater: {
      display: "flex",
      height: 300,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: 700,
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: 500,
      },
    },
    showTimes: {
      display: "flex",
      height: 300,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: 300,
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: 200,
      },
    },
    showTimeItem: {
      backgroundColor: theme.palette.warning.main,
      padding: "10px",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: theme.palette.warning.dark,
      },
    },
  };
});

export default styles;
