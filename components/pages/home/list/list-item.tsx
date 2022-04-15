import Link from 'next/link';
import {
  ListItemRight,
  ListItemContainer,
  ListItemName,
  ListItemLeftContainer,
} from './list-item.styles';

interface Props {
  left: string;
  right: string;
  url: string;
}

export const ListItem = ({ left, right, url }: Props) => (
  <ListItemContainer>
    <ListItemLeftContainer>
      <ListItemName>{url ? <Link href={url}>{left}</Link> : left}</ListItemName>
    </ListItemLeftContainer>

    <ListItemRight>{right}</ListItemRight>
  </ListItemContainer>
);
