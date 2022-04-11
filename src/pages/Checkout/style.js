import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    "@global": {
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
    },

    root: {
      marginBottom: 50,
    },
    banner: {
      backgroundImage: "url(../../../../assets/img/slider4.jpg)",
      height: 400,
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(0deg, rgba(12,5,18,1) 0%, rgba(12,5,18,0.8748541652989321) 0%, rgba(12,5,18,0.20258525773590685) 100%)",
        [theme.breakpoints.down("md")]: {
          height: "80%",
        },
        [theme.breakpoints.down("sm")]: {
          height: "75%",
        },
      },

      [theme.breakpoints.down("sm")]: {
        height: 300,
      },
    },
    subBanner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },

    screenImage: {
      width: "100%",
    },

    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
      color: "#fff",
    },
    seat: {
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "10px",
      backgroundColor: theme.palette.grey[500],
      color: "#fff",
    },

    bookedSeat: {
      backgroundColor: theme.palette.error.dark,
      cursor: "no-drop",
    },

    isBooking: {
      backgroundColor: "#00FF00",
    },

    vipSeat: {
      backgroundColor: theme.palette.primary.main,
    },

    bookedSeatByMe: {
      backgroundColor: "#D2691E",
    },

    beingBooked: {
      backgroundColor: theme.palette.warning.light,
      cursor: "no-drop",
    },

    note: {
      margin: "40px 0",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      textAlign: "center",
      alignItems: "center",
    },
    noteItem: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 5px",
      },
    },

    history: {
      margin: "50px 0",
    },
    historyList: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 15,
    },
    historyItem: {
      width: "30%",
      margin: "20px 0",
      [theme.breakpoints.down("md")]: {
        width: "45%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    time: {
      display: "flex",
      justifyContent: "space-between",
      margin: "0 10px",
    },
    number: {
      margin: "10px",
    },
    title: {
      height: "70px",
    },
    checkoutInfo: {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    switchTabs: {
      borderBottom: 1,
      borderColor: "divider",
      width: "80%",
      margin: "auto",
    },
  };
});

export default styles;
