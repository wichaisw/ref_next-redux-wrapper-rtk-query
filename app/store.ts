import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { instrumentApi } from '../services/instruments';

export const store = configureStore({
  reducer: {
    [instrumentApi.reducerPath]: instrumentApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(instrumentApi.middleware),
})

// required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;