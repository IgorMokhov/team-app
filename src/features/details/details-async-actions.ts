import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, USERS_URL } from '../../apiConfig';
import { ReqresUser } from '../../types';

export const getDetailsUser = createAsyncThunk<ReqresUser, string>(
  '@@details/getDetailsUser',
  async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}${USERS_URL}/${id}`);
      
      return response.data.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);
