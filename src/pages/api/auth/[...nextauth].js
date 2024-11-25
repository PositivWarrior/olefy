import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "streaming",
].join(",");

const LOGIN_URL = `https://accounts.spotify.com/authorize?scope=${scopes}`;

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOT_CLIENT_ID,
      clientSecret: process.env.SPOT_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
