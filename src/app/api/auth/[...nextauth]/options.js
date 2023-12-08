import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/model/UserModal";
import ConnectDB from "@/db/db";

export const options = {

    providers: [
        GitHubProvider({
            profile(profile) {
                console.log("git profile", profile);
                let userRole = "github user";
                if (profile?.email == process.env.ADMIN) {
                    userRole = "admin";
                }

                return {
                    ...profile,
                    role: userRole
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
        ,

        GoogleProvider({
            profile(profile) {
                console.log("google profile", profile);
                let userRole = "google user";
                if (profile?.email == process.env.ADMIN) {
                    userRole = "admin";
                }

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "Enter Your Email" },
                password: { label: "Password", type: "password", placeholder: 'Enter Your Password' }
            },
            async authorize(credentials) {
                try {
                    await ConnectDB();
                    // console.log("credentials", credentials);
                    const foundUser = await User.findOne({ email: credentials.email }).lean().exec()

                    if (foundUser) {
                        const match = await bcrypt.compare(credentials.password, foundUser.password)
                        if (match) {
                            delete foundUser.password;
                            if(credentials.email === process.env.ADMIN){
                                foundUser['role'] = "admin";
                                return foundUser;
                                
                            }else{
                                foundUser['role'] = "Unverified Email";
                                return foundUser;
                            }
                        }
                    }


                } catch (error) {
                    console.log(error);
                }
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },

        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session;
        }
    }
}