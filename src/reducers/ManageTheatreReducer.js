import { SET_ARRAY_THEATRE } from "../actions/types/ManageTheatreType";

const stateDefault = {
  arrTheatre: [],
};

export const ManageTheatreReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_ARRAY_THEATRE: {
      state.arrTheatre = action.arrTheatre;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
