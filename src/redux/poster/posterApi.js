import { baseApi } from "../api/baseApi";

export const posterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPoster: builder.query({
      query: () => "/poster",
      providesTags: ["poster"],
    }),
    getAllSplashPosters: builder.query({
      query: (id) => `/poster?posterType=splash`,
      providesTags: ["poster"],
    }),
    addPoster: builder.mutation({
      query: (data) => {
        return {
          url: `/poster`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["poster"],
    }),
    removePoster: builder.mutation({
      query: (id) => ({
        url: `/poster/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["poster"],
    }),
  }),
});
export const {
  useGetAllPosterQuery,
  useGetAllSplashPostersQuery,
  useAddPosterMutation,
  useRemovePosterMutation,
} = posterApi;
