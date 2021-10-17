import { combineReducers } from "redux";
import usersReduers from "./reducer";

const rootReducer = combineReducers({
  data: usersReduers,
});
export default rootReducer;
