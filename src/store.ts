import { configureStore } from '@reduxjs/toolkit';
import { userReduser } from './features/user/user-slice';

export const store = configureStore({
  reducer: { userReduser },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
