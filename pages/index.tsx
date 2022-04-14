import Head from 'next/head';

import { Link } from '../components/link';
import EnderLogo from '../public/vectors/ender.svg';
import CalHacksLogo from '../public/vectors/calhacks.svg';
import CodeDayLogo from '../public/vectors/codeday.svg';
import ExecuteBigLogo from '../public/vectors/executebig.svg';
import TwitterIcon from '../public/vectors/twitter.svg';
import { NowPlaying } from '../components/pages/home/now-playing';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mingjie Jiang | @itsmingjie</title>
        <meta
          name='description'
          content='Building inclusive & accessible CS exploration programs for everyone.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className={`max-w-[640px] bg-gradient-to-br from-pink/10 to-pink/5 shadow-pink/20 hover:shadow-pink/30 shadow-lg hover:shadow-md p-5 rounded-lg ease-in-out duration-500`}
      >
        <div className='flex justify-between'>
          <div className='font-bold'>Mingjie Jiang</div>
          <Link href='https://twitter.com/itsmingjie' external>
            <span>
              <TwitterIcon className='inline w-5 h-5 mr-1 align-middle text-coral' />
            </span>
            <div className='inline font-bold text-coral'>@itsmingjie</div>
          </Link>
        </div>
        <div className='mt-5'>
          <p>
            Learner & builder focusing on education. Dropped out
            <Link
              href='https://twitter.com/itsmingjie/status/1480692863067295748'
              external
            >
              <div className='inline text-coral'>*</div>
            </Link>{' '}
            from UC Berkeley CS to help build
            <div className={`inline ml-2`}>
              <Link href='https://joinender.com' external>
                <EnderLogo className='inline w-5 h-5 mr-1 align-text-bottom fill-dark' />
                <div className='inline font-bold text-coral'>Ender</div>
              </Link>
            </div>
            , crafting what I would&rsquo;ve wanted in education for the next
            generation of creative kids who love to build.
          </p>
          <p className='mt-3'>
            Also involved in building
            <span className='inline mx-1 font-bold text-coral'>
              <Link href='https://calhacks.io' external>
                <CalHacksLogo className='inline w-5 h-5 mr-[0.1em] align-text-bottom' />
                Cal Hacks
              </Link>
            </span>
            <span className='text-hint-1'>&middot;</span>
            <span className='inline mx-1 font-bold text-coral'>
              <Link href='https://labs.codeday.org' external>
                <CodeDayLogo className='inline w-5 h-5 mr-[0.1em] align-text-bottom' />
                CodeDay Labs
              </Link>
            </span>
            <span className='text-hint-1'>&middot;</span>
            <span className='inline mx-1 font-bold text-coral'>
              <Link href='https://executebig.org' external>
                <ExecuteBigLogo className='inline w-5 h-5 mr-[0.1em] align-text-bottom' />
                Execute Big
              </Link>
            </span>
            .
          </p>
          <NowPlaying />
          <p className='mt-3 font-serif italic text-hint-1'>
            A work in progress website. In the meantime, you should check out{' '}
            <Link href='https://mingjie.notion.site/' external>
              <div className='inline text-coral'>things I wrote about</div>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
