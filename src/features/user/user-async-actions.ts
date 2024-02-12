import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, REGISTER_URL } from '../../apiConfig';
import axios from 'axios';

export const registerUser = createAsyncThunk<
  { id: number; token: string },
  { email: string; password: string }
>('@@user/registerUser', async ({ email, password }) => {
  try {
    const response = await axios.post(BASE_URL + REGISTER_URL, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
});
