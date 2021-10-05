// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { SignupReducer } from "./signup";
// #endregion Local Imports

export default combineReducers({
    signup: SignupReducer,
    home: HomeReducer,
});
