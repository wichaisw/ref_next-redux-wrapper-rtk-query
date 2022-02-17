// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseSplitApi } from './baseApi';
import { IInstrument } from '../interfaces/instrument';

export const instrumentApi = baseSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstrument: builder.query<IInstrument[], void>({
      query: () => 'instruments',
    }),
    getInstrumentById: builder.query<IInstrument, number>({
      query: (id) => `instruments/${id}`,
    })
  }),
  overrideExisting: false,
})

// Export hooks for usage in functional components
export const {
  useGetAllInstrumentQuery,
  useGetInstrumentByIdQuery,
  util: { getRunningOperationPromises },
} = instrumentApi

// export endpoints for use in SSR
export const { 
  getAllInstrument, 
  getInstrumentById 
} = instrumentApi.endpoints;