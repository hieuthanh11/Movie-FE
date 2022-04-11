import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    sideBar: {
      position: "fixed",
      height: "100vh",
      zIndex: 10,
      backgroundColor: "#8E00FF",
      width: "4%",
      transition: "all .3s linear",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "&:hover": {
        width: "15%",
      },
      "&:hover $sideBarIcon:first-child": {
        padding: "5% 40%",
      },
      "&:hover $sideBarIcon:not(:first-child)": {
        padding: 0,
        paddingLeft: "5%",
        paddingRight: "5%",
      },
      "&:hover $sideBarIconBottom": {
        display: "flex",
        gap: 15,
        padding: 0,
        paddingLeft: "5%",
        paddingBottom: "20%",
      },
      "&:hover $title": {
        opacity: 1,
        color: "#fff",
      },
    },
    sideBarIcon: {
      display: "flex",
      gap: 15,
      marginBottom: "20%",
      cursor: "pointer",
      "&:first-child": {
        padding: "20% 10%",
      },
      "&:not(:first-child)": {
        padding: "0 20%",
        height: "30px",
      },
    },
    title: {
      opacity: 0,
    },
    sideBarIconBottom: {
      padding: "0 20%",
    },
    goBack: {
      display: "flex",
      padding: "20%",
      cursor: "pointer",
      gap: 10,
    },
  };
});

export default useStyles;
