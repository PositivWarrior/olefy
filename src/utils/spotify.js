import axios from "axios";

export const fetchSpotifyData = async (accessToken, endpoint) => {
  const response = await axios.get(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
