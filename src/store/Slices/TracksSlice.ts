import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '@types';

interface TrackState {
  tracks: ITrack[];
  selectedTrack: ITrack | null;
  isPlaying: boolean; // здесь
}

const initialState: TrackState = {
  tracks: [],
  selectedTrack: null,
  isPlaying: false, // здесь
};

const TrackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = action.payload;
    },
    setSelectedTrack: (state, action: PayloadAction<ITrack | null>) => {
      state.selectedTrack = action.payload;
      state.isPlaying = !!action.payload;
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setTracks, setSelectedTrack, togglePlayPause } =
  TrackSlice.actions;
export default TrackSlice.reducer;
