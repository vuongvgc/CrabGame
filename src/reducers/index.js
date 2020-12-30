import { combineReducers } from "redux";
import GrabGameReducer from "./GrabGameReducer";
const rootReducer = combineReducers({
  GrabGameReducer: GrabGameReducer,
});

export default rootReducer;
