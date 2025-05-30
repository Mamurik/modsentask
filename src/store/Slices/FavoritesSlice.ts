import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LocalStorageService from '@utils/LocalStorageService';

const getFavoritesFromLocalStorage = (): string[] => {
  return LocalStorageService.getItem<string[]>('favorites') || [];
};

const saveFavoritesToLocalStorage = (favoriteTrackIds: string[]) => {
  LocalStorageService.setItem('favorites', favoriteTrackIds);
};

interface FavoritesState {
  favoriteTrackIds: string[];
}

const initialState: FavoritesState = {
  favoriteTrackIds: getFavoritesFromLocalStorage(),
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const trackId = action.payload;
      if (state.favoriteTrackIds.includes(trackId)) {
        state.favoriteTrackIds = state.favoriteTrackIds.filter(
          (id) => id !== trackId
        );
      } else {
        state.favoriteTrackIds.push(trackId);
      }
      saveFavoritesToLocalStorage(state.favoriteTrackIds);
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteTrackIds = action.payload;
      saveFavoritesToLocalStorage(state.favoriteTrackIds);
    },
  },
});

export const { toggleFavorite, setFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
