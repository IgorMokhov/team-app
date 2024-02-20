import { createSlice } from '@reduxjs/toolkit';
import { LocalUser, Status } from '../../types';
import { getUsers } from './users-async-actions';
import { extractLocalUsers } from '../../utils/userDataConverters';
import {
  getLikesFromStorage,
  saveLikesToStorage,
} from '../../utils/localStorageUtils';

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
    toggleLike: (state, action) => {
      const user = state.usersList.find((user) => user.id === action.payload);
      if (user) {
        user.like = !user.like;
        // Filtering users with likes and creating an array of user IDs
        const updatedLikes = state.usersList
          .filter((user) => user.like)
          .map((user) => user.id);
        saveLikesToStorage(updatedLikes); // Saving the array of IDs to local storage
      }
    },
    // Setting likes from localStorage upon initialization or updating the user list
    setLikesFromStorage: (state) => {
      const likes = getLikesFromStorage();
      state.usersList.forEach((user) => {
        user.like = likes.includes(user.id); // true / false
      });
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(getUsers.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        const users = extractLocalUsers(action.payload.data);
        const likes = getLikesFromStorage();
        // Applying likes to users
        const usersWithLikes = users.map((user) => ({
          ...user,
          like: likes.includes(user.id),
        }));
        state.usersList = state.usersList.concat(usersWithLikes);
        state.page = state.page + 1;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { clearUsers, toggleLike, setLikesFromStorage } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
