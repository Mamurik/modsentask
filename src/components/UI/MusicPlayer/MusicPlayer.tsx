import { RootState } from '@store/store';
import { memo, useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import {
  PlayerWrapper,
  StyledAudioPlayer,
  TrackTitle,
} from './MusicPlayer.styled';

const MusicPlayer = () => {
  const selectedTrack = useSelector(
    (state: RootState) => state.tracks.selectedTrack
  );
  const isPlaying = useSelector((state: RootState) => state.tracks.isPlaying);
  const playerRef = useRef<AudioPlayer | null>(null);
  const [volume] = useState(1);

  useEffect(() => {
    if (playerRef.current?.audio?.current) {
      if (isPlaying) {
        playerRef.current.audio.current.play().catch((e) => {
          console.warn('Auto-play blocked by browser:', e);
        });
      } else {
        playerRef.current.audio.current.pause();
      }
    }
  }, [isPlaying, selectedTrack]);

  const audioSrc = selectedTrack
    ? `https://discoveryprovider.audius.co/v1/tracks/${selectedTrack.id}/stream`
    : undefined;

  return (
    <PlayerWrapper>
      {selectedTrack ? (
        <TrackTitle>{selectedTrack.title}</TrackTitle>
      ) : (
        <TrackTitle>Select a track to listen to</TrackTitle>
      )}
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
