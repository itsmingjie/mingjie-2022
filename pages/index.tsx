import { Header } from '../components/header';
import Link from 'next/link';
import { Paragraph } from '../design-system/components/paragraph';
import { SingleLayout } from '../design-system/layouts/single-layout';
import { Section } from '../design-system/components/section';
import { Meta } from '../design-system/utils/meta';
import * as S from './index.styles';

const Home = () => {
  return (
    <SingleLayout>
      <Meta />

      <S.Container>
        <Header title='Mingjie Jiang' subtitle='Web & Product Engineer' />

        <Section title='About'>
          <Paragraph>
            Learner & builder, crafting interactive education experiences for
            kids at <Link href='https://joinender.com'>Ender</Link>.
          </Paragraph>

          <Paragraph>
            I grew up in Shanghai, immigrated to Maryland, and went to UC
            Berkeley for a little over a year. I now live in Austin, a weird yet
            beautiful, diverse, and fast-growing city.
          </Paragraph>

          <Paragraph>
            I spent a few years working at CS education nonprofits like{' '}
            <Link href='https://hackclub.com' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                Hack Club
              </a>
            </Link>
            ,{' '}
            <Link href='https://codeday.org/' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                CodeDay
              </a>
            </Link>
            , and eventually cofounded my own initiative{' '}
            <Link href='https://executebig.org/' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                Execute Big
              </a>
            </Link>
            . I enjoy teaching, building, and doing research about education.
          </Paragraph>
        </Section>

        <Section title='Brain'>
          I started managing my knowledge publicly in Notion.{' '}
          <Link href='https://mingjie.notion.site' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              See my brain &rarr;
            </a>
          </Link>
        </Section>

        <Section title='Links'>
          <Paragraph>
            <S.LinksList>
              <Link href='https://twitter.com/itsmingjie' passHref>
                <a target='_blank' rel='noopener noreferrer'>
                  Twitter
                </a>
              </Link>

              <S.Separator decorative orientation='vertical' />

              <Link href='https://github.com/itsmingjie' passHref>
                <a target='_blank' rel='noopener noreferrer'>
                  GitHub
                </a>
              </Link>

              <S.Separator decorative orientation='vertical' />

              <Link
                href='https://scholar.google.com/citations?user=J9sYVMEAAAAJ&hl'
                passHref
              >
                <a target='_blank' rel='noopener noreferrer'>
                  Scholar
                </a>
              </Link>
            </S.LinksList>
          </Paragraph>
        </Section>
      </S.Container>
    </SingleLayout>
  );
};

export default Home;
