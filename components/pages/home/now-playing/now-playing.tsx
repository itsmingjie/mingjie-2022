import { Spinner } from '../../../../design-system/components/spinner';
import useSWR, { type Fetcher } from 'swr';
import { List } from '../list';

const fetchMusic: Fetcher<any[]> = () =>
  fetch('/api/now-playing').then((res) => res.json());

export const NowPlaying = () => {
  const { data, error } = useSWR(['now-playing'], fetchMusic);

  if (error) return <></>;
  if (!data) return <Spinner />;

  return (
    <List.Container>
      {data.map((track: any) => (
        <List.Item
          key={track.id}
          left={track.name}
          right={track.artist['#text']}
          url={track.url}
        />
      ))}
    </List.Container>
  );
};
