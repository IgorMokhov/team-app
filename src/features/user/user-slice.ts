import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './user-async-actions';

interface UserSlice {
  token: string | null;
  error: string | null;
}

const initialState: UserSlice = {
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { setToken, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
