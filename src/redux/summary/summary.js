import { baseApi } from "../api/baseApi";

export const summaryApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => "/user/summary",
    }),
    getAnalytics:builder.query({
        query: (year) => `/user/analytics?year=${year}`,
    }),
    getTransections:builder.query({
        query: () => `/subscribedPlan/transections`,
    }),
  }),
});
export const { useGetSummaryQuery,useGetAnalyticsQuery,useGetTransectionsQuery } = summaryApiSlice;
