// depedencies
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default local storage
import rootReducer from "./reducer/rootReducer"; // Your root reducer
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     user: userSlicer,
//     updatePhoto: profilePhotoSlicer,
//     flightData: flightSlicer,
//   },
//   middleware: [logger],
// });
