import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/user/user-slice';
import { usersReducer } from './features/users/users-slice';
import { detailsReducer } from './features/details/details-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
