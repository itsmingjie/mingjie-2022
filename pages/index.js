import Head from "next/head";
import { useState, useEffect } from "react";

import LocaleSwitcher from "../components/LocaleSwitcher";
import Link from "../components/Link";
import Image from "next/image";
import EnderLogo from "../public/vectors/ender.svg";

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
      {music && (
        <p className="mt-3 animated-fadeup anim-delay-2">
          {music.artist["#text"].includes("Taylor Swift") ? (
            <span>
              I listen to Taylor Swift a lot. In fact, my most recently played
              song is
              <i>{music["name"]}</i>.
            </span>
          ) : (
            <span>
              My most recently played song is{" "}
              <i className="text-matcha font-semibold">{music["name"]}</i> by{" "}
              <span className="text-matcha font-semibold">
                {music["artist"]["#text"]}
              </span>
              . But rest assured: I still listen to Taylor Swift a lot.
            </span>
          )}
        </p>
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
      <div className="flex justify-between animated-fadeup">
        <div className="font-bold">Mingjie Jiang</div>
        <Link href="https://twitter.com/itsmingjie" external>
          <div className="font-serif text-coral font-bold">@itsmingjie</div>
        </Link>
      </div>
      <div className="mt-5 animated-fadeup anim-delay-2">
        <p>
          Learner & builder focusing on education. Kind of dropped out
          <Link
            href="https://twitter.com/itsmingjie/status/1480692863067295748"
            external
          >
            <div className="inline text-coral">*</div>
          </Link>{" "}
          from UC Berkeley CS at the moment. Currently working at
          <div className="inline mx-2">
            <Link href="https://joinender.com" external>
              <EnderLogo className="w-5 h-5 inline align-text-bottom fill-coral mr-1" />
              <div className="inline font-bold text-coral">Ender</div>
            </Link>
          </div>
          &mdash; building what I have always wanted in education for the next
          generation of creative kids who love to build.
        </p>
        <NowPlaying />
        <p className="animated-fadeup anim-delay-3 mt-3 text-hint-1 font-serif italic">
          A work in progress website. In the meantime, you should check out{" "}
          <Link href="https://mingjie.notion.site/" external>
            <div className="text-coral inline">things I wrote about</div>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
