import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getproducts: build.query({
      query: ({limit = 20, skip = 0 ,category}) => `/products${category ? "/category/" + category : ""}?limit=${limit}&skip=${skip}`,
    }),
    getproductdetails: build.query({
      query: (id) => `/product/${id}`,
    }), 
    getcategoryList: build.query({
      query: ()=> `/product/category-list`
    })
  }),
});

export const {useGetproductsQuery,useGetproductdetailsQuery,useGetcategoryListQuery} =API;