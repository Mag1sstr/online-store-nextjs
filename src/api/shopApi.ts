"use client";
import { ICategory, IProducts } from "@/types/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], null>({
      query: () => ({
        url: "/products",
      }),
    }),
    getCategories: builder.query<ICategory[], null>({
      query: () => ({
        url: "/categories",
      }),
    }),
    getSingleCategoryProducts: builder.query<IProducts[], string>({
      query: (slug) => ({
        url: `/products/?categorySlug=${slug}`,
      }),
    }),
    getSingleProduct: builder.query<IProducts, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getProductsByTitle: builder.query<IProducts[], string>({
      query: (value) => ({
        url: `/products/?title=${value}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSingleCategoryProductsQuery,
  useGetSingleProductQuery,
  useGetProductsByTitleQuery,
} = shopApi;
