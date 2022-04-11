import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    card: {
      width: "300px",
      height: "300px",
      boxSizing: "border-box",
      color: "#fff",
      perspective: "1000px",
      padding: "20px 0",
      "&:hover $cardInner": {
        transform: "rotateY(180deg)",
      },
      [theme.breakpoints.down("md")]: {
        width: "250px",
        height: "250px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "200px",
        height: "200px",
      },
    },
    cardInner: {
      position: "relative",
      width: "100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 0.6s",
      borderRadius: "20px",
      transformStyle: "preserve-3d",
    },

    frontCard: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "20px",
      position: "absolute",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    },

    backCard: {
      position: "absolute",
      backgroundColor: theme.palette.background.default,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "20px",
      width: "100%",
      height: "100%",
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      overflow: "hidden",
      transform: "rotateY(180deg)",
      "&:hover $data": {
        transform: "translateY(0)",
        color: "#fff",
        [theme.breakpoints.down("md")]: {
          transform: "translateY(15px)",
        },
        [theme.breakpoints.down("sm")]: {
          transform: "translateY(20px)",
        },
      },
    },
    data: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      transform: "translateY(calc(70px + 2em))",
      transition: "transform 1s",
      [theme.breakpoints.down("md")]: {
        transform: "translateY(calc(70px + 3em))",
      },
      [theme.breakpoints.down("sm")]: {
        transform: "translateY(calc(70px))",
      },
    },
    content: {
      padding: "1rem",
      position: "relative",
      zIndex: 1,
    },
    date: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      margin: "20px",
    },

    navLink: {
      display: "block",
      width: "100px",
      margin: "0.7em auto 1em",
      textAlign: "center",
      fontSize: "12px",
      color: "#f57c00",
      fontWeight: "bolder",
      lineHeight: 1,
      position: "relative",
      fontWeight: 700,
      "&:before": {
        content: '"->"',
        opacity: 1,
        position: "absolute",
        right: 0,
        top: "50%",
        transform: " translate(0, -50%)",
        transition: "all 0.3s",
      },
      "&:hover": {
        "&:before": {
          transform: "translate(15px, -50%)",
          opacity: 1,
        },
      },
    },
  };
});

export default styles;
