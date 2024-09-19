import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../project.config";

export const eRestauApi = createApi({
  reducerPath: "eRestauApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.ENDPOINT}/${config.API_VERSION}/api`,
  }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: (name) => `/getUnverifiedUsers`,
    }),
  }),
});

export const { useGetUserByName } = eRestauApi;
