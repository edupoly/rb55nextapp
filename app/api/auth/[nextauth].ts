import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { emailId, password } = credentials;
        await dbConnect();
        console.log("ikkadidaka vasthunda", emailId);
        const user = await User.findOne({ emailId });
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return null;

        // Return the user object (including the MongoDB _id)
        return user;
      },
    }),
  ],
  callbacks: {
    // 1. Attach the user ID to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id.toString();
      }
      return token;
    },
    // 2. Pass the ID from the token into the session object
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
