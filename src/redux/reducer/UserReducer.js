import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  GET_USER_DETAIL,
  LOG_IN_ACTION,
  REGISTER_ACTION,
  REMOVE_USER,
  SET_USER_INFO,
} from "../type/ManageUserType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  userRegister: {},
  userInfo: {},
  userInfoDetail: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      const { loginInfo } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(loginInfo));
      localStorage.setItem(TOKEN, loginInfo.accessToken);
      state.userLogin = action.loginInfo;
      break;
    case REGISTER_ACTION:
      state.userRegister = action.registerInfo;
      break;
    case SET_USER_INFO:
      state.userInfo = action.userInfomation;
      break;
    case GET_USER_DETAIL:
      state.userInfoDetail = action.userDetail;
      break;
    case REMOVE_USER:
      state.userInfoDetail = null;
      break;
    default:
      break;
  }
  return { ...state };
};

export default UserReducer;
