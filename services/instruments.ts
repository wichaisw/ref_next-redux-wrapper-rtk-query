import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IInstrument } from '../interfaces/instrument';

export const instrumentApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllInstrument: builder.query<IInstrument, string>({
      query: () => 'instruments',
    }),
    getInstrumentById: builder.query<IInstrument, number>({
      query: (id) => `instruments/${id}`,
    })
  }),
})

export const {
  useGetAllInstrumentQuery,
  useGetInstrumentByIdQuery,
} = instrumentApi