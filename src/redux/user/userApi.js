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
    getUserProfile: builder.query({
      query: () => `/user/profile`,
      providesTags: ["profile"],
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
    changeProfilePicture:builder.mutation({
      query: (data) => {
        return {
          url: `/user/profile-picture`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    updateProfile:builder.mutation({
      query: (data) => {
        return {
          url: `/user/profile-picture`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    updateProfileInfo:builder.mutation({
      query: ({id,data}) => {
        return {
          url: `/user/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    getNotification:builder.query({
      query: (queryString) => `/notification?${queryString}`,
    }),
    sendOtpToUserEmail:builder.mutation({
      query: (data) => {
        return {
          url: `/user/send-otp`,
          method: "POST",
          body: data,
        };
      },
    }),
    verifyOtp:builder.mutation({
      query: (data) => {
        return {
          url: `/user/verify-otp`,
          method: "POST",
          body: data,
        };
      },
    }),
    updatePassword:builder.mutation({
      query: (data) => {
        return {
          url: `/user/change-password`,
          method: "POST",
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
  useChangePasswordMutation,
  useGetUserProfileQuery,
  useChangeProfilePictureMutation,
  useUpdateProfileInfoMutation,
  useGetNotificationQuery,
  useSendOtpToUserEmailMutation,
  useVerifyOtpMutation,
 useUpdatePasswordMutation
} = usersApiSlice;
