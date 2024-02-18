import { createSlice } from '@reduxjs/toolkit';
import { LocalUser, Status } from '../../types';
import { getUsers } from './users-async-actions';
import { extractLocalUsers } from '../../utils/userDataConverters';

interface UsersSlice {
  loading: Status;
  usersList: LocalUser[];
  page: number;
  totalPages: number | null;
  error: string | null;
}

const initialState: UsersSlice = {
  loading: 'idle',
  usersList: [],
  page: 1,
  totalPages: null,
  error: null,
};

const usersSlice = createSlice({
  name: '@@users',
  initialState,
  reducers: {
    clearUsers: () => initialState,
  },
  extraReducers: (buider) => {
    buider
      .addCase(getUsers.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.usersList = state.usersList.concat(
          extractLocalUsers(action.payload.data)
        );
        state.page = state.page + 1;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { clearUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
