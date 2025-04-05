import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login', // Custom login page
    error: '/auth/error', // Custom error page
  },
  secret: process.env.NEXTAUTH_SECRET,
};