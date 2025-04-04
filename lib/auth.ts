import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.role = token.role
      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
}

export default NextAuth(authOptions)