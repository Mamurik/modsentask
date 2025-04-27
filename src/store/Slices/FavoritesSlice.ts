import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getFavoritesFromLocalStorage = (): string[] => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
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
      localStorage.setItem('favorites', JSON.stringify(state.favoriteTrackIds));
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteTrackIds = action.payload;
      localStorage.setItem('favorites', JSON.stringify(state.favoriteTrackIds));
    },
  },
});

export const { toggleFavorite, setFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
