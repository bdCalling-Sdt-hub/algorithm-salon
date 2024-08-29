import { baseApi } from "../api/baseApi";

export const cuponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPoster: builder.query({
      query: () => "/poster",
      providesTags:["poster"]
    }),
    getPoster: builder.query({
      query: (id) => `/poster/${id}`,
      providesTags:["poster"]
    }),
    addPoster:builder.mutation({
        query: (data) => ({
            url: `/poster`,
            method: "POST",
            body: data,
          }),
          invalidatesTags:["poster"]
    }),
    removePoster:builder.mutation({
        query: (id) => ({
            url: `/poster/${id}`,
            method: "DELETE",
          }),
          invalidatesTags:["poster"]
    }),

  }),
});
export const { useGetAllPosterQuery,useGetPosterQuery,useAddPosterMutation,useRemovePosterMutation} = cuponApi;
