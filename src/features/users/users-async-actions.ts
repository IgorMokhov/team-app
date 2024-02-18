import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, PAGINATION_LIMIT_PARAM, USERS_URL } from '../../apiConfig';
import { UsersResponse } from '../../types';
import axios from 'axios';

export const getUsers = createAsyncThunk<UsersResponse, number>(
  '@@/users/getUsers',
  async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${USERS_URL}${page}${PAGINATION_LIMIT_PARAM}`
      );

      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);
