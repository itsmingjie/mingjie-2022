import { List } from '../list';
import dayjs from 'dayjs';

interface Props {
  posts: any[];
}

export const RecentPosts = ({ posts }: Props) => {
  return (
    <List.Container>
      {posts.map((post: any) => {
        console.log(post);
        return (
          <List.Item
            key={post.id}
            left={post.properties.Name.title[0].plain_text}
            right={dayjs(post.properties.Posted.date.start).format(
              'MMM D, YYYY'
            )}
            url={post.url}
          />
        );
      })}
    </List.Container>
  );
};
