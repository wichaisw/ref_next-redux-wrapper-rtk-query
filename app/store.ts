import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { instrumentApi } from '../services/instruments';
import { createWrapper } from "next-redux-wrapper";

export const store = () => configureStore({
  reducer: {
    [instrumentApi.reducerPath]: instrumentApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(instrumentApi.middleware),
})

// required for refetchOnFocus/refetchOnReconnect behaviors
// setupListeners(store().dispatch);

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store, { debug: false});