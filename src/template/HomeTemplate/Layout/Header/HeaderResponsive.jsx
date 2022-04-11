import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, Fragment } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import _ from "lodash";
import useStyles from "./styles";
import { RenderLogin } from "./RenderLogin/RenderLogin";
import DarkModeUI from "./DarkModeUI/DarkModeUI";
const headersData = [
  {
    label: "MOVIE",
    href: "/paginationFilm",
  },
  {
    label: "NEWS & PROMOTION",
    href: "/news",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function HeaderResponsive() {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={styles.toolbar}>
        {Logo}
        <div>{getMenuButtons()}</div>
        {DarkModeUI()}
        {translate}
        {RenderLogin()}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={styles.bgTooolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon color='secondary' />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={styles.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{Logo}</div>
        <div className={styles.switchMob}>{DarkModeUI()}</div>
        <div>{RenderLogin()}</div>
        <div className={styles.langMob}>{translate}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem sx={{ fontWeight: "bolder" }}>{label}</MenuItem>
        </Link>
      );
    });
  };

  const Logo = (
    <NavLink to='/'>
      <img src='../../../../assets/img/logo.png' alt='logo' width={50} />
    </NavLink>
  );

  const translate = (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard'>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={lang}
          label=''
          onChange={handleChange}
        >
          <MenuItem selected={lang === "en"} value='en'>
            <img
              width={20}
              height={20}
              src='../../../../assets/img/flag1.png'
              alt='flag'
            />
          </MenuItem>
          <MenuItem selected={lang === "vi"} value='vi'>
            <img
              width={20}
              height={20}
              src='../../../../assets/img/flag2.png'
              alt='flag'
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <div key={label} className={styles.navTopic}>
          <NavLink
            activeClassName={styles.active}
            to={href}
            className={styles.navLink}
          >
            {label}
          </NavLink>
        </div>
      );
    });
  };

  return (
    <header>
      <AppBar className={styles.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
