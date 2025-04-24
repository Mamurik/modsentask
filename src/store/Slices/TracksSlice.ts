import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '@types';

interface TrackState {
  tracks: ITrack[];
  selectedTrack: ITrack | null;
  isFavorite: boolean;
}
const initialState: TrackState = {
  tracks: [],
  selectedTrack: null,
  isFavorite: false,
};
const TrackSlice = createSlice({
  initialState,
  name: 'tracks',
  reducers: {
    setTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = action.payload;
    },
    setSelectedTrack: (state, action: PayloadAction<ITrack>) => {
      state.selectedTrack = action.payload;
    },
    toggleFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
  },
});
export const { setSelectedTrack, setTracks } = TrackSlice.actions;
export default TrackSlice.reducer;
