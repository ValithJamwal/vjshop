import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; 
import productsSlice from './slice/productsSlice'

const reducer = combineReducers({
    productsState : productsSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});

export default store;
