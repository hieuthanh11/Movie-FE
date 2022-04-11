import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import BookingTicketReducer from "./reducer/BookingTicketReducer";
import CarouselReducer from "./reducer/CarouselReducer";
import LoadingReducer from "./reducer/LoadingReducer";
import MovieListReducer from "./reducer/MovieListReducer";
import MuiReducer from "./reducer/MuiReducer";
import TheaterReducer from "./reducer/TheaterReducer";
import UserReducer from "./reducer/UserReducer";
import UserAdminReducer from "./reducer/UserAdminReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  MovieListReducer,
  MuiReducer,
  TheaterReducer,
  UserReducer,
  BookingTicketReducer,
  LoadingReducer,
  UserAdminReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
