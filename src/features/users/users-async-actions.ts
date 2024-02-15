import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, USERS_URL } from '../../apiConfig';
import { ReqresUser } from '../../types';
import axios from 'axios';

export const getUsers = createAsyncThunk<{ data: ReqresUser[] }>(
  '@@/users/getUsers',
  async () => {
    try {
      const response = await axios.get(BASE_URL + USERS_URL);
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);
