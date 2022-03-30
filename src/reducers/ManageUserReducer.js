import {
  LOG_IN_ACTION,
  SET_INFOR_USER_BOOKING,
  SET_USER_ADMIN,
} from "../actions/types/ManageUser";
import { TOKEN, USER_LOGIN } from "../util/settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
  userInfor: {},
  userAdmin: [],
};

export const ManageUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOG_IN_ACTION: {
      const { inforLogin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(inforLogin));
      localStorage.setItem(TOKEN, inforLogin.accessToken);
      return { ...state, userLogin: inforLogin };
    }
    case SET_INFOR_USER_BOOKING: {
      state.userInfor = action.userInfor;
      return { ...state };
    }

    case SET_USER_ADMIN: {
      state.userAdmin = action.userAdmin;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
