import { createSlice } from '@reduxjs/toolkit';
import { LocalUser, Status } from '../../types';
import { getUsers } from './users-async-actions';
import { extractLocalUsers } from '../../utils/userDataConverters';

interface UsersSlice {
  loading: Status;
  usersList: LocalUser[];
  error: string | null;
}

const initialState: UsersSlice = {
  loading: 'idle',
  usersList: [],
  error: null,
};

const usersSlice = createSlice({
  name: '@@users',
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getUsers.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.usersList = extractLocalUsers(action.payload.data);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const usersReducer = usersSlice.reducer;
