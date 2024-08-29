import { baseApi } from "../api/baseApi";

export const settingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleSettings: builder.query({
      query: () => "/about-us/contact",
      providesTags:["Contact"]
    }),
    editContactUs:builder.mutation({
        query: (data) => ({
            url: `/about-us/contact/66d04dbad9074993320b4e5c`,
            method: "PATCH",
            body:data
          }),
          invalidatesTags:["Contact"]
    })
  }),
});
export const { useEditContactUsMutation,useGetSingleSettingsQuery} = settingApi;
