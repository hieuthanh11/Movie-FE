import { makeStyles } from "@mui/styles";

const styles = makeStyles(() => {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
    },
  };
});

export default styles;
