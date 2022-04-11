import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundImage: "url(../../../../assets/img/slider2.jpg)",
      backgroundPosition: "center",
      backgroundSize: "100%",
      minHeight: "100vh",
    },

    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%)",
    },
  };
});

export default useStyles;
