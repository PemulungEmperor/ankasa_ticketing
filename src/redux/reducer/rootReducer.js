import { combineReducers } from "@reduxjs/toolkit";

//reducer
import profilePhotoSlicer from "./profilePhotoSlicer";
import flightSlicer from "./flightSlicer.js";
import userSlicer from "./userSlicer.js";

const rootReducer = combineReducers({
  user: userSlicer,
  updatePhoto: profilePhotoSlicer,
  flightData: flightSlicer,
});

export default rootReducer;
