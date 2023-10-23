import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/CombineReducer/CombineReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userAuth"], // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const Persistor = persistStore(store);
