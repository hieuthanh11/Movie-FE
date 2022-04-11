import { Logout, Settings } from "@mui/icons-material";
import {
  Typography,
  Button,
  IconButton,
  MenuItem,
  Stack,
  Tooltip,
  Avatar,
  Menu,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { history } from "../../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../../util/settings/config";
import useStyles from "./styles";

export const RenderLogin = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { userLogin } = useSelector((state) => {
    return state.UserReducer;
  });
  if (_.isEmpty(userLogin)) {
    return (
      <Stack direction='row' spacing={3}>
        <Button
          onClick={() => {
            history.push("/login");
          }}
          sx={{ color: "#fff" }}
          className={styles.btn}
          variant='outlined'
        >
          {t("Login")}
        </Button>
        <Button
          onClick={() => {
            history.push("/register");
          }}
          sx={{ color: "#fff" }}
          className={styles.btn}
          variant='outlined'
        >
          {t("Register")}
        </Button>
      </Stack>
    );
  }
  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title='Account settings'>
          <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              {userLogin.taiKhoan.charAt(0)}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            history.push("/profile");
          }}
        >
          <Avatar />
          <Typography color='secondary.main'>My account</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            history.push("/admin/films");
          }}
        >
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          <Typography color='secondary.main'>Go to AD Page</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/");
            window.location.reload();
          }}
        >
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          <Typography color='secondary.main'>Logout</Typography>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
