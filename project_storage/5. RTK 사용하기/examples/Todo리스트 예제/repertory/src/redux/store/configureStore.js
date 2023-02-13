import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoSlice from "../slices/todos";

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

const isDevEnv = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => isDevEnv ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: isDevEnv,
});

export default store;
