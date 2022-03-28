import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CaroselReducer";
import { LoadingReducer } from "../reducers/LoadingReducer";
import { ManageTheatreReducer } from "../reducers/ManageTheatreReducer";
import { ManageTicketReducer } from "../reducers/ManageTicketReducer";
import { ManageUserReducer } from "../reducers/ManageUserReducer";
import { MovieListReducer } from "../reducers/MovieListReducer";
const rootReducer = combineReducers({
  //state of entire app
  CarouselReducer,
  MovieListReducer,
  ManageTheatreReducer,
  ManageUserReducer,
  ManageTicketReducer:ManageTicketReducer,
  LoadingReducer: LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
