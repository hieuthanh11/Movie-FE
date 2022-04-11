import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TheatersIcon from "@mui/icons-material/Theaters";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./styles";
import { history } from "../../../../App";
import LogoutIcon from "@mui/icons-material/Logout";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <div>
        <div className={classes.sideBarIcon}>
          <img src='../../../../assets/img/logo.png' alt='logo' width={40} />
        </div>
        <div
          onClick={() => {
            history.push("/admin/users");
          }}
          className={classes.sideBarIcon}
        >
          <PersonIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            User List
          </Typography>
        </div>

        <div
          onClick={() => {
            history.push("/admin/adduser");
          }}
          className={classes.sideBarIcon}
        >
          <AddIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            Add User
          </Typography>
        </div>

        <Divider sx={{ marginBottom: "30px" }} />

        <div
          onClick={() => {
            history.push("/admin/films");
          }}
          className={classes.sideBarIcon}
        >
          <TheatersIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            Films List
          </Typography>
        </div>

        <div
          onClick={() => {
            history.push("/admin/addfilms");
          }}
          className={classes.sideBarIcon}
        >
          <AddIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            Add film
          </Typography>
        </div>

        <Divider sx={{ marginBottom: "30px" }} />

        <div
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/");
            window.location.reload();
          }}
          className={classes.sideBarIcon}
        >
          <LogoutIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            Logout
          </Typography>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            history.push("/home");
          }}
          className={classes.goBack}
        >
          <ArrowBackIcon sx={{ color: "#fff" }} />
          <Typography component='span' className={classes.title}>
            Movie
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
