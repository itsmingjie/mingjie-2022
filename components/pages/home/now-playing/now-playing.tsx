import { useState, useEffect } from 'react';
import { Spinner } from '../../../spinner';

export const NowPlaying = () => {
  const [music, setMusic] = useState<any>();

  useEffect(() => {
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => {
        setMusic(data);
      });
  }, []);

  return (
    <>
      {music ? (
        <p className='mt-3'>
          {music.artist['#text'].includes('Taylor Swift') ? (
            <span>
              I listen to Taylor Swift a lot. In fact, my most recently played
              song is{' '}
              <i className='font-semibold text-matcha'>{music['name']}</i>.
            </span>
          ) : (
            <span>
              My most recently played song is{' '}
              <i className='font-semibold text-matcha'>{music['name']}</i> by{' '}
              <span className='font-semibold text-matcha'>
                {music['artist']['#text']}
              </span>
              . But rest assured: I still listen to Taylor Swift a lot.
            </span>
          )}
        </p>
      ) : (
        <Spinner />
      )}
    </>
  );
};
