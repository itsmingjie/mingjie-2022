import type { NextApiRequest, NextApiResponse } from 'next';

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const NUM_RESULTS = 5;
const ENDPOINT_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mingjie66&api_key=${LASTFM_API_KEY}&format=json&limit=${NUM_RESULTS}`;

export default async function nowPlaying(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lastfm_response = await fetch(ENDPOINT_URL);
  const lastfm_data = await lastfm_response.json();

  if (!lastfm_data.error) {
    res.send(lastfm_data['recenttracks']['track']);
  } else {
    res.status(500).send(lastfm_data.error);
  }
}
