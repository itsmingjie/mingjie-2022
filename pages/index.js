import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LocaleSwitcher from "../components/LocaleSwitcher";
import Footer from "../components/Footer";
import Link from "../components/Link";

const Title = styled.h1`
  font-size: var(--text-size);
  font-weight: 600;
  display: inline-block;
`;

const Subtitle = styled.span`
  font-size: var(--text-size);
  font-style: italic;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  border-left: 1px solid var(--low-contrast-color);
  font-family: var(--font-family-serif);
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

/* Now playing block that fades in once data is populated from LastFM */
const NowPlaying = () => {
  const { t } = useTranslation("common");
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
        <p className={"animated-fadeup"}>
          {music.artist["#text"].includes("Taylor Swift") ? (
            <span>
              {t("now_playing_ts.0")}
              <i>{music["name"]}</i>
              {t("now_playing_ts.1")}
            </span>
          ) : (
            <span>
              {t("now_playing.0")}
              <i>{music["name"]}</i>
              {t("now_playing.1")}
              {music["artist"]["#text"]}
              {t("now_playing.2")}
            </span>
          )}
        </p>
      )}
    </>
  );
};

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("full_name")} | @itsmingjie</title>
        <meta
          name="description"
          content="Building inclusive & accessible CS exploration programs for everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={"animated-fadeup"}>
        <Title>{t("full_name")}</Title>
        <Subtitle>{t("mission")}</Subtitle>
      </div>
      <div className={"animated-fadeup anim-delay-1"}>
        <LocaleSwitcher />
      </div>
      <div className={"animated-fadeup anim-delay-2"}>
        <p>
          {t("home_p1.0")}
          <Link href="https://mingjie.dev" external>
            [uwuwu]
          </Link>
          {t("home_p1.1")}
          <Link href="https://executebig.org" external>
            Execute Big
          </Link>
          {t("home_p1.2")}
        </p>
        <p>
          <Link
            href="https://mingjie.notion.site/My-Education-0f2357cdd6574dfcaf953dd650a35dfc"
            external
          >
            {t("home_p2.0")}
          </Link>
          {t("home_p2.1")}
        </p>
        <NowPlaying />
      </div>
    </div>
  );
};

export default Home;
