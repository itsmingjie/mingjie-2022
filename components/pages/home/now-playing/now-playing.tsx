import { Spinner } from '../../../../design-system/components/spinner';
import { NowPlayingContainer } from './now-playing.styles';
import { Track } from './track';
import useSWR, { type Fetcher } from 'swr';

const fetchMusic: Fetcher<any[]> = () =>
  fetch('/api/now-playing').then((res) => res.json());

export const NowPlaying = () => {
  const { data, error } = useSWR(['now-playing'], fetchMusic);

  if (error) return <></>;
  if (!data) return <Spinner />;

  return (
    <NowPlayingContainer>
      {data.map((track: any) => (
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
