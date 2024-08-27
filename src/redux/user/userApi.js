import { baseApi } from "../api/baseApi";

export const usersApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),
    getAllUsers:builder.query({
      query: (queryString) => `/user?${queryString}`,
    })
  }),
});
export const {
  useLoginMutation,
  useGetAllUsersQuery,
} = usersApiSlice;