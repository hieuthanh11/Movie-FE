import { makeStyles } from "@mui/styles";

const style = makeStyles((theme) => {
  return {
    "slick-prev": {
      display: "block",
      left: "-50px",
      "&:before": {
        color: "gray !important",
        fontSize: "3rem !important",
        [theme.breakpoints.down("md")]: {
          position: "absolute",
          left: "320px",
          bottom: "-160px",
        },
        [theme.breakpoints.down("sm")]: {
          position: "absolute",
          left: "150px",
          bottom: "-140px",
        },
      },
    },
    "slick-next": {
      display: "block",
      "&:before": {
        color: "gray !important",
        fontSize: "3rem !important",
        [theme.breakpoints.down("md")]: {
          position: "absolute",
          right: "320px",
          bottom: "-160px",
        },
        [theme.breakpoints.down("sm")]: {
          position: "absolute",
          right: "120px",
          bottom: "-140px",
        },
      },
    },
    topic: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "20px",
      },
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      margin: "50px 0",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
  };
});

export default style;
