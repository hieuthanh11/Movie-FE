import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    brand: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "32px",
    },
    brandItem: {
      margin: "10px 40px",
      [theme.breakpoints.down("sm")]: {
        margin: "10px",
      },
    },
    brandImage: {
      width: 70,
    },

    content: {
      display: "flex",
      flexWrap: "wrap",
    },
    content_item: {
      width: "25%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
        margin: "20px 0",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "15px 0",
      },
    },
    subTitle: {
      marginTop: "20px",
    },
  };
});

export default styles;
