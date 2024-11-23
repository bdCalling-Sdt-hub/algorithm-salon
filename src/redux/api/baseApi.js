import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper function to get the token from local storage
const getToken = () => localStorage.getItem('token');

// console.log(import.meta.env.VITE_BASE_URL)
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
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
