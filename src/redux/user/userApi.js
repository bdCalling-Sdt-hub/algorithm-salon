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
    getAllUsers: builder.query({
      query: (queryString) => `/user?${queryString}`,
    }),
    getSingleSalon: builder.query({
      query: (id) => `/salon/${id}`,
      providesTags: ["salon"],
    }),
    verifySalon: builder.mutation({
      query: ({ id, verify }) => {
        return {
          url: `/user/verify/${id}`,
          method: "PATCH",
          body: verify,
        };
      },
      invalidatesTags: ["salon"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `/user/reset-password`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useGetAllUsersQuery,
  useGetSingleSalonQuery,
  useVerifySalonMutation,
  useChangePasswordMutation
} = usersApiSlice;
