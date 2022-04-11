import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
      marginBottom: 50,
    },

    banner: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "400px",
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",

      "&:after": {
        content: "''",
        top: 0,
        left: 0,
        position: "absolute",
        width: "100%",
        height: "100%",

        background:
          "linear-gradient(0deg, rgba(12,5,18,1) 0%, rgba(12,5,18,0.20258525773590685) 100%, rgba(12,5,18,1) 100%)",
      },
    },
    main: {
      position: "relative",
      transform: "translateY(-30%)",
      height: "320px",
      [theme.breakpoints.down("sm")]: {
        height: "520px",
      },
    },

    content: {
      display: "flex",
      width: "100%",
      position: "relative",
      gap: 20,
      padding: "0 24px",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "0",
      },
    },

    filmImage: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "30%",
        marginRight: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginRight: "0",
      },
    },

    img: {
      width: "300px",
      height: "400px",
      borderRadius: "20px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "200px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "350px",
      },
    },

    info: {
      width: "70%",
      lineHeight: 5,
      [theme.breakpoints.down("md")]: {
        width: "70%",
        marginRight: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginRight: "0px",
      },
    },

    btn: {
      background: "linear-gradient(89.15deg, #654CFF 0.59%, #C808F8 99.27%);",
    },

    time: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },

    date: {
      display: "flex",
    },

    icon: {
      display: "flex",
      gap: 15,
      [theme.breakpoints.down("md")]: {
        marginRight: "30px",
      },
      [theme.breakpoints.down("md")]: {
        marginRight: "0",
      },
    },

    rate: {
      marginTop: 32,
      display: "flex",
      justifyContent: "space-between",
    },

    rateItem: {
      [theme.breakpoints.down("md")]: {
        marginRight: "20px",
      },
    },

    vote: {
      display: "flex",
      gap: 30,
    },

    desc: {
      position: "relative",
      bottom: "50%",
      padding: "0 24px",
      marginTop: "20px",
    },
    imgList: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
      margin: "32px 0",
    },
    imgItem: {
      width: "28%",
      margin: "0 20px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "20px",
        width: "40%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    imgDetail: {
      width: "100%",
      borderRadius: "20px",
    },
    castList: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    castItem: {
      width: "20%",
      textAlign: "center",
      padding: "0 10px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "20px",
        width: "40%",
      },
    },
    actorImg: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      overflow: "hidden",
      margin: "0 auto",
      marginBottom: "24px",
      border: "4px solid  #8E00FF",
    },
  };
});

export default styles;
