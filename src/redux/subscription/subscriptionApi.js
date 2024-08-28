import { baseApi } from "../api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => "/subscription",
      providesTags:["Subscription"]
    }),
    getSingleSubscription: builder.query({
      query: (id) => `/subscription/${id}`,
      providesTags:["Subscription"]
    }),
    addSubscription:builder.mutation({
        query: (data) => ({
            url: `/subscription`,
            method: "POST",
            body: data,
          }),
          invalidatesTags:["Subscription"]
    }),
    removeSubscription:builder.mutation({
        query: (id) => ({
            url: `/subscription/${id}`,
            method: "DELETE",
          }),
          invalidatesTags:["Subscription"]
    }),
    editSubscription:builder.mutation({
        query: ({id,data}) => ({
            url: `/subscription/${id}`,
            method: "PATCH",
            body:data
          }),
          invalidatesTags:["Subscription"]
    })
  }),
});
export const {  useAddSubscriptionMutation,useGetSingleSubscriptionQuery,useEditSubscriptionMutation,useGetSubscriptionsQuery,useRemoveSubscriptionMutation} = subscriptionApi;
