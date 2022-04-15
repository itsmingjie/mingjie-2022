import { Link } from '../../../../design-system/components/link';
import { useState, useEffect } from 'react';
import { Spinner } from '../../../../design-system/components/spinner';
import { EmphasizedText, NowPlayingContainer } from './now-playing.styles';
import { Track } from './track';

export const NowPlaying = () => {
  const [music, setMusic] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => {
        setMusic(data);
      });
  }, []);

  return (
    <NowPlayingContainer>
      {music.map((track) => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist['#text']}
          url={track.url}
        />
      ))}
    </NowPlayingContainer>
  );
};
