import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOGIN_URL, REGISTER_URL } from '../../apiConfig';
import axios from 'axios';

export const registerUser = createAsyncThunk<
  { token: string },
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

export const loginUser = createAsyncThunk<
  { token: string },
  { email: string; password: string }
>('@@user/loginUser', async ({ email, password }) => {
  try {
    const response = await axios.post(BASE_URL + LOGIN_URL, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
});
