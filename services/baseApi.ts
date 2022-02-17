import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseSplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: () => ({}),
})