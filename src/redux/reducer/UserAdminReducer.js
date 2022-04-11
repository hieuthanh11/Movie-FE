import { GET_USERS_LIST } from "../type/ManageUserType";

const initialState = {
  arrUser: [],
};

const UserAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      state.arrUser = action.arrUserAd;
      break;
    default:
      break;
  }
  return { ...state };
};

export default UserAdminReducer;
