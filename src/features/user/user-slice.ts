import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './user-async-actions';

interface UserSlice {
  id: number | null;
  token: string | null;
}

const initialState: UserSlice = {
  id: null,
  token: null,
};

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
    });
    // .addCase(registerUser.rejected, (state, action) => {});
  },
});

export const userReduser = userSlice.reducer;
