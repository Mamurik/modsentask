import 'react-h5-audio-player/lib/styles.css';

import { RootState } from '@store/store';
import { memo, useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';

import { PlayerWrapper, StyledAudioPlayer, TrackTitle } from './styled';
const PLAYER_UI = {
  DEFAULT_VOLUME: 1,
  EMPTY_MESSAGE: 'Select a track to listen to',
};
const MusicPlayer = () => {
  const selectedTrack = useSelector(
    (state: RootState) => state.tracks.selectedTrack
  );
  const isPlaying = useSelector((state: RootState) => state.tracks.isPlaying);
  const playerRef = useRef<AudioPlayer | null>(null);
  const [volume] = useState(PLAYER_UI.DEFAULT_VOLUME);

  useEffect(() => {
    const audioElement = playerRef.current?.audio?.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.play().catch(() => {});
    } else {
      audioElement.pause();
    }
  }, [isPlaying, selectedTrack]);

  const audioSrc = selectedTrack
    ? `https://discoveryprovider.audius.co/v1/tracks/${selectedTrack.id}/stream`
    : undefined;

  return (
    <PlayerWrapper>
      <TrackTitle>
        {selectedTrack ? selectedTrack.title : PLAYER_UI.EMPTY_MESSAGE}
      </TrackTitle>
      <StyledAudioPlayer
        ref={playerRef}
        autoPlayAfterSrcChange
        src={audioSrc}
        showSkipControls={false}
        showJumpControls={false}
        volume={volume}
      />
    </PlayerWrapper>
  );
};

export default memo(MusicPlayer);
