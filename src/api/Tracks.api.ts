import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrack } from '@types';

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<ITrack[], void>({
      query: () => 'tracks/search?limit=16',
      transformResponse: (response: { data: ITrack[] }) => response.data,
    }),
    getRecommended: builder.query<ITrack[], void>({
      query: () => 'tracks/search?limit=20',
      transformResponse: (response: { data: ITrack[] }) => {
        const shuffled = [...response.data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
      },
    }),
  }),
});

export const { useGetTracksQuery, useGetRecommendedQuery } = trackApi;
