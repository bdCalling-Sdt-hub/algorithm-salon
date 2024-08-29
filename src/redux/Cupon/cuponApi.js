import { baseApi } from "../api/baseApi";

export const cuponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCupons: builder.query({
      query: () => "/cupon",
      providesTags:["cupon"]
    }),
    getCupon: builder.query({
      query: (id) => `/cupon/${id}`,
      providesTags:["cupon"]
    }),
    addCupon:builder.mutation({
        query: (data) => ({
            url: `/cupon`,
            method: "POST",
            body: data,
          }),
          invalidatesTags:["cupon"]
    }),
    removeCupon:builder.mutation({
        query: (id) => ({
            url: `/cupon/${id}`,
            method: "DELETE",
          }),
          invalidatesTags:["cupon"]
    }),

  }),
});
export const {  useAddCuponMutation,useGetAllCuponsQuery,useGetCuponQuery,useRemoveCuponMutation} = cuponApi;
