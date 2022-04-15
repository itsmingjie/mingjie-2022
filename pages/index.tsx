import Head from 'next/head';

import { NowPlaying, Paragraph, Section } from '../components/pages/home';
import { Header } from '../components/header';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Mingjie Jiang</title>
        <meta
          name='description'
          content='Building inclusive & accessible CS exploration programs for everyone.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header title='Mingjie Jiang' subtitle='Software & Product Engineer' />

      <Paragraph>
        Learner & builder focusing on education. Dropped out from UC Berkeley CS
        to help build <Link href='https://joinender.com'>Ender</Link>, crafting
        what I would&rsquo;ve wanted in education for the next generation of
        creative kids who love to build.
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

      <Section title='Recently Played'>
        <NowPlaying />
      </Section>
    </>
  );
};

export default Home;
