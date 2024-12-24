import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    signIn: async ({ profile, account, user }) => {
      // console.log({ profile, account, user });

      if (!profile || !account) {
        return false;
      }
      if (account.provider === "google") {
        if (user) {
          const reqBody = {
            fullName: user.name!,
            email: user.email!,
            avatar: user.image!,
          };

          console.log(reqBody);
          // await socialLogin(reqBody);
        }
      }

      return true;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
