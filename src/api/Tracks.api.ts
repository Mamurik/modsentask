import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrack } from '@types';
export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<ITrack[], void>({
      query: () => 'tracks/search',
      transformResponse: (response: { data: ITrack[] }) => response.data,
    }),
  }),
});

export const { useGetTracksQuery } = trackApi;
