import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper function to get the token from local storage
const getToken = () => localStorage.getItem('token');

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.10.11:8000/api/v1',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ["Subscription","poster","salon","Privacy","aboutus","profile"],
  endpoints: (builder) => ({
 
  }),
});

export const { } = baseApi;
