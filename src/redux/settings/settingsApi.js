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
    }),
    getPrivacyPolicy: builder.query({
      query: () => "/privacy-policy",
      providesTags:["Privacy"]
    }),
      editPrivacyPolicy:builder.mutation({
        query: (data) => ({
            url: `/privacy-policy/66c862784879e637e3a0c539`,
            method: "PATCH",
            body:data
          }),
          invalidatesTags:["Privacy"]
    }),
    getTermsAndCondition:builder.query({
      query: () => "/terms-and-conditions",
      providesTags:["termsAndCondition"]
    }),
    editTermsAndCondition:builder.mutation({
      query: (data) => ({
          url: `/terms-and-conditions/66c86bad6514a8f27fbe0c5e`,
          method: "PATCH",
          body:data
        }),
        invalidatesTags:["termsAndCondition"]
  }),
  getAboutUs:builder.query({
    query: () => "/about-us",
    providesTags:["aboutus"]
  }),
  editGetAboutUs:builder.mutation({
    query: (data) => ({
        url: `/about-us/66c8687ad915ac6991bcde9a`,
        method: "PATCH",
        body:data
      }),
      invalidatesTags:["aboutus"]
}),
  }),
// useGetPrivacyPolicyQuery,useEditPrivacyPolicyMutation
});
export const { useEditContactUsMutation,useGetSingleSettingsQuery,useGetPrivacyPolicyQuery,useEditPrivacyPolicyMutation,useGetTermsAndConditionQuery,useEditTermsAndConditionMutation,
  useGetAboutUsQuery,useEditGetAboutUsMutation
} = settingApi;
