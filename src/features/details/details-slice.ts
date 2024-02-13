import { createSlice } from '@reduxjs/toolkit';
import { LocalUser, Status } from '../../types';
import { getDetailsUser } from './details-async-actions';
import { extractLocalUser } from '../../utils/userDataConverters';

interface DetailsSlice {
  loading: Status;
  user: LocalUser | null;
  error: string | null;
}

const initialState: DetailsSlice = {
  loading: 'idle',
  user: null,
  error: null,
};

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetailsUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailsUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getDetailsUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = extractLocalUser(action.payload);
      })
      .addCase(getDetailsUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { clearDetailsUser } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
