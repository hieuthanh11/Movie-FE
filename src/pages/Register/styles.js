import { makeStyles } from "@mui/styles";

const styles = makeStyles(() => {
  return {
    root: {
      backgroundImage: "url(../../../../assets/img/slider2.jpg)",
      minHeight: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px",
    },
    item: {
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 0px 29.4px 0.6px rgb(0 0 0 / 50%)",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
});

export default styles;
