import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { initApi } from "../api";
import userReducer from "./slices/userSlice";
import sensorReducer from "./slices/sensorsSlice";
import alertsReducer from "./slices/alertsSlice";
import recommendationsReducer from "./slices/recommendationsSlice";

import { UnAuthErrorMiddleware } from "./middleware";
 
export const HOST =
  import.meta.env.VITE_API_HOST  

  
const api = initApi(HOST);

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  sensors: sensorReducer,
  alerts: alertsReducer,
  recommendations: recommendationsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [api.reducerPath], // Exclude api reducer from persistence
  // blacklist: [api.reducerPath], // Exclude api reducer from persistence
  // whitelist: ["*"], // Exclude api reducer from persistence

};

 const persistedReducer = persistReducer<any>(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware).concat(UnAuthErrorMiddleware(window))
});




const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor };
export default store;