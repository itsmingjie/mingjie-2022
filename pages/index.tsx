import Head from 'next/head';

import { NowPlaying, RecentPosts } from '../components/pages/home';
import { Header } from '../components/header';
import Link from 'next/link';
import { getDatabase } from '../libs/notion';
import { Paragraph } from '../design-system/components/paragraph';
import { SingleLayout } from '../design-system/layouts/single-layout';
import { Section } from '../design-system/components/section';
import { Meta } from '../design-system/components/meta';

const Home = ({ posts }: { posts: any[] }) => {
  return (
    <SingleLayout>
      <Meta />

      <Header title='Mingjie Jiang' subtitle='Web & Product Engineer' />

      <Paragraph>
        Learner & builder focusing on education. Immigrant born and raised in
        Shanghai, China. Dropped out from UC Berkeley CS to help build{' '}
        <Link href='https://joinender.com'>Ender</Link>, crafting what I
        would&rsquo;ve wanted in education for the next generation of creative
        kids who love to build.
      </Paragraph>

      <Paragraph>
        You might be interested some interesting{' '}
        <Link href='/spellings'>spellings</Link> of my name.
      </Paragraph>

      <Section title='Other Involvements'>
        <Paragraph>
          Executive Director of{' '}
          <Link href='https://calhacks.io'>Cal Hacks</Link> (my last obligation
          at Berkeley), building the world&rsquo;s largest collegiate hackathon
          and a few peripheral projects supporting the school&rsquo;s
          entrepreneurial culture.
        </Paragraph>
        <Paragraph>
          Cofounder of <Link href='https://executebig.org'>Execute Big</Link>, a
          non-profit organization that supports underrepresented students on
          their journey to explore computer science, specifically tackling
          problems often neglected by larger organizations.
        </Paragraph>
      </Section>

      <Section title='Journals'>
        <RecentPosts posts={posts} />
      </Section>

      <Section title='Recently Played'>
        <NowPlaying />
      </Section>
    </SingleLayout>
  );
};

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_BLOG_DB as string;
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database.slice(0, 5),
    },
    revalidate: 1, // In seconds
  };
};

export default Home;
