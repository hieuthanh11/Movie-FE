import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      gap: 15,
      padding: "120px 30px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },

    info: {
      width: "50%",
      minHeight: "100vh",
      backgroundColor: "#191919",
      borderRadius: "10px",
      padding: "20px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    history: {
      marginTop: "20px",
    },
    control: {
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%)",
    },
    cardList: {
      display: "flex",
      flexWrap: "wrap",
    },
    card: {
      width: "45%",
      margin: "10px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    cardImage: {
      width: "100%",
      height: "200px",
    },
  };
});

export default styles;
