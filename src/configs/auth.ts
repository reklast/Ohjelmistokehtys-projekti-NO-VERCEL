import type { AuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import connectMongo from "@/utils/connectMongo";
import DbUsers from "@/Models/DbModelsUser";

export const authConfig: AuthOptions = {
    
    providers: [
        Credentials({
            credentials: {
                username: {label: 'username', type: 'username', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                    const getUsersFromDB = async () => {
                    console.log("CONNECTING TO MONGO");
                    await connectMongo();
                    console.log("CONNECTED TO MONGO");
                  
                    console.log("FETCHING DOCUMENTS");
                    const data = await DbUsers.find();
                    console.log("FETCHED DOCUMENTS");
                  
                    return {
                      data: JSON.parse(JSON.stringify(data)),
                    };
                  };
                if(!credentials?.username || !credentials.password) return null;
                const getUsers = await getUsersFromDB();
                const currentUser = getUsers.data.filter((user: { password: string; name: string; }) => user.password === credentials.password && user.name === credentials.username)[0];
                if (currentUser) {
                    const {password, ...userWithoutPass} = currentUser;

                    return userWithoutPass  as unknown as User ;
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/api/auth/login'
    },
    session: {strategy: 'jwt'},
    callbacks: {
        async jwt({user, token}) {
            user && (token.activityStatus = user.activityStatus)
            return token
        },

        async session({ token, session}) {
            session.user.activityStatus = token.activityStatus
            return session
        }
    }
}
