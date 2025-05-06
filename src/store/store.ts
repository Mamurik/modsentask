import { trackApi } from '@api/Tracks.api';
import { configureStore } from '@reduxjs/toolkit';

import FavoritesSlice from './Slices/FavoritesSlice';
import TracksSlice from './Slices/TracksSlice';

export const store = configureStore({
  reducer: {
    [trackApi.reducerPath]: trackApi.reducer,
    tracks: TracksSlice,
    favorites: FavoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
