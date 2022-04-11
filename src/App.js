import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { WithTheme } from "./Mui/configTheme";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_DARK_MODE } from "./redux/type/MuiType";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./template/CheckoutTemplate/CheckoutTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register.jsx";
import PaginationFilm from "./pages/PaginationFilm/PaginationFilm";
import Theater from "./pages/Theater/Theater";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import NewAndPromotion from "./pages/NewsAndPromotion/NewsAndPromotion";
import Loading from "./components/Loading/Loading.jsx";
import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import FilmManager from "./pages/Admin/FilmsManager/FilmManager";
import UserManager from "./pages/Admin/UsersManger/UserManager";
import AddUser from "./pages/Admin/AddUser/AddUser";
import AddFilmAd from "./pages/Admin/AddFilmAd/AddFilmAd";
import EditFilmAd from "./pages/Admin/EditFilmAd/EditFilmAd";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";
import EditUser from "./pages/Admin/EditUser/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDarkMode = localStorage.getItem("darkmode");
    if (getDarkMode) {
      dispatch({
        type: SET_DARK_MODE,
        payload: JSON.parse(getDarkMode),
      });
    }
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={history}>
        <ToastContainer />
        <Loading />
        <Switch>
          <HomeTemplate path='/home' exact Component={Home} />
          <HomeTemplate path='/detail/:id' exact Component={Detail} />
          <HomeTemplate
            path='/paginationFilm'
            exact
            Component={PaginationFilm}
          />
          <HomeTemplate path='/news' exact Component={NewAndPromotion} />
          <HomeTemplate path='/theater/:id' exact Component={Theater} />
          <CheckoutTemplate path='/profile' exact Component={Profile} />
          <HomeTemplate path='/contact' exact Component={Contact} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />
          <HomeTemplate path='/' exact Component={Home} />
          <AdminTemplate path='/admin/films' exact Component={FilmManager} />
          <AdminTemplate path='/admin/addfilms' exact Component={AddFilmAd} />
          <AdminTemplate
            path='/admin/editfilms/:id'
            exact
            Component={EditFilmAd}
          />
          <AdminTemplate
            path='/admin/showtimes/:id'
            exact
            Component={ShowTime}
          />
          <AdminTemplate path='/admin/users' exact Component={UserManager} />
          <AdminTemplate path='/admin/adduser' exact Component={AddUser} />
          <AdminTemplate
            path='/admin/edituser/:id'
            exact
            Component={EditUser}
          />
          <HomeTemplate path='/' exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default WithTheme(App);
