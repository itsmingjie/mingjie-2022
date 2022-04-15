import Link from 'next/link';
import Image from 'next/image';
import {
  TrackArtist,
  TrackContainer,
  TrackName,
  TrackNameContainer,
} from './track.styles';

interface Props {
  name: string;
  artist: string;
  url: string;
}

export const Track = ({ name, artist, url }: Props) => (
  <TrackContainer>
    <TrackNameContainer>
      <TrackName>
        <Link href={url}>{name}</Link>
      </TrackName>
    </TrackNameContainer>

    <TrackArtist>{artist}</TrackArtist>
  </TrackContainer>
);
