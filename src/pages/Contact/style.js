import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    root: {
      paddingTop: "150px",
      paddingBottom: "50px",
    },

    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
    },
    infoArea: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      padding: "0 20px",
      transform: "translateY(-100px)",
    },
    infoItem: {
      display: "flex",
      flexWrap: "wrap",
    },
    itemImage: {
      [theme.breakpoints.down("sm")]: {
        width: "40px",
        height: "40px",
      },
    },
  };
});

export default styles;
