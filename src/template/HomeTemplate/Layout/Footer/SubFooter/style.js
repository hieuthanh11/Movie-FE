import { makeStyles } from "@mui/styles";

const styles = makeStyles(() => {
  return {
    root: {
      paddingBottom: "50px",
    },
    content: {
      backgroundImage: "url('../../../../../assets/img/subfooter.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 350,
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      "&:after": {
        content: "''",
        top: 0,
        left: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(47, 91, 244, 0.47)",
      },
    },
  };
});

export default styles;
