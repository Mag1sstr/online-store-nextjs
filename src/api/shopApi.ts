"use client";
import { IProducts } from "@/types/interfaces";
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
  }),
});

export const { useGetProductsQuery } = shopApi;
