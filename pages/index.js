import Head from "next/head";
import { useState, useEffect } from "react";

import Link from "../components/Link";
import EnderLogo from "../public/vectors/ender.svg";
import CalHacksLogo from "../public/vectors/calhacks.svg";
import CodeDayLogo from "../public/vectors/codeday.svg";
import ExecuteBigLogo from "../public/vectors/executebig.svg";
import TwitterIcon from "../public/vectors/twitter.svg";

const NowPlaying = () => {
  const [music, setMusic] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // call lastfm recently played
      const lastfm_response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mingjie66&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
      );
      const lastfm_data = await lastfm_response.json();
      if (!lastfm_data.error) {
        setMusic(lastfm_data["recenttracks"]["track"][0]);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {music ? (
        <p className="mt-3">
          {music.artist["#text"].includes("Taylor Swift") ? (
            <span>
              I listen to Taylor Swift a lot. In fact, my most recently played
              song is{" "}
              <i className="font-semibold text-matcha">{music["name"]}</i>.
            </span>
          ) : (
            <span>
              My most recently played song is{" "}
              <i className="font-semibold text-matcha">{music["name"]}</i> by{" "}
              <span className="font-semibold text-matcha">
                {music["artist"]["#text"]}
              </span>
              . But rest assured: I still listen to Taylor Swift a lot.
            </span>
          )}
        </p>
      ) : (
        <>
          <svg
            role="status"
            className="w-5 h-5 mt-3 text-pink animate-spin dark:text-pink fill-coral"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </>
      )}
    </>
  );
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mingjie Jiang | @itsmingjie</title>
        <meta
          name="description"
          content="Building inclusive & accessible CS exploration programs for everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`max-w-[640px] bg-gradient-to-br from-pink/10 to-pink/5 shadow-pink/20 hover:shadow-pink/30 shadow-lg hover:shadow-md p-5 rounded-lg ease-in-out duration-500`}
      >
        <div className="flex justify-between">
          <div className="font-bold">Mingjie Jiang</div>
          <Link href="https://twitter.com/itsmingjie" external>
            <span>
              <TwitterIcon className="inline w-5 h-5 mr-1 align-middle text-coral" />
            </span>
            <div className="inline font-bold text-coral">@itsmingjie</div>
          </Link>
        </div>
        <div className="mt-5">
          <p>
            Learner & builder focusing on education. Dropped out
            <Link
              href="https://twitter.com/itsmingjie/status/1480692863067295748"
              external
            >
              <div className="inline text-coral">*</div>
            </Link>{" "}
            from UC Berkeley CS to work at
            <div className={`inline mx-2`}>
              <Link href="https://joinender.com" external>
                <EnderLogo className="inline w-5 h-5 mr-1 align-text-bottom fill-dark" />
                <div className="inline font-bold text-coral">Ender</div>
              </Link>
            </div>
            &mdash; helping to build what I would&rsquo;ve wanted in education
            for the next generation of creative kids who love to build.
          </p>
          <p className="mt-3">
            Also involved in building
            <span className="inline mx-1 font-bold text-coral">
              <Link href="https://calhacks.io" external>
                <CalHacksLogo className="inline w-5 h-5 mr-[0.1em] align-text-bottom" />
                Cal Hacks
              </Link>
            </span>
            <span className="text-hint-1">&middot;</span>
            <span className="inline mx-1 font-bold text-coral">
              <Link href="https://labs.codeday.org" external>
                <CodeDayLogo className="inline w-5 h-5 mr-[0.1em] align-text-bottom" />
                CodeDay Labs
              </Link>
            </span>
            <span className="text-hint-1">&middot;</span>
            <span className="inline mx-1 font-bold text-coral">
              <Link href="https://executebig.org" external>
                <ExecuteBigLogo className="inline w-5 h-5 mr-[0.1em] align-text-bottom" />
                Execute Big
              </Link>
            </span>
            .
          </p>
          <NowPlaying />
          <p className="mt-3 font-serif italic text-hint-1">
            A work in progress website. In the meantime, you should check out{" "}
            <Link href="https://mingjie.notion.site/" external>
              <div className="inline text-coral">things I wrote about</div>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
