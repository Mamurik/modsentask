import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrack } from '@types';

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1/',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<ITrack[], { page: number; perPage: number }>({
      query: ({ page, perPage }) =>
        `tracks/search?offset=${(page - 1) * perPage}&limit=${perPage}`,
      transformResponse: (response: { data: ITrack[] }) => response.data,
    }),
    getRecommended: builder.query<ITrack[], void>({
      query: () => 'tracks/search?limit=20',
      transformResponse: (response: { data: ITrack[] }) => {
        const shuffled = [...response.data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
      },
    }),
    getTracksBySearch: builder.query<
      ITrack[],
      { searchQuery: string; page: number; perPage: number }
    >({
      query: ({ searchQuery, page, perPage }) =>
        `tracks/search?query=${encodeURIComponent(searchQuery)}&offset=${(page - 1) * perPage}&limit=${perPage}`,
      transformResponse: (response: { data: ITrack[] }) => response.data,
    }),
  }),
});

export const {
  useGetTracksBySearchQuery,
  useGetTracksQuery,
  useGetRecommendedQuery,
} = trackApi;
