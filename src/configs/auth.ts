import type { AuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import testUsers from '@/testUsers/testUsers.json';

export const authConfig: AuthOptions = {
    
    providers: [
        Credentials({
            credentials: {
                username: {label: 'username', type: 'username', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) { 
                if(!credentials?.username || !credentials.password) return null;
                const currentUser = testUsers.filter((user) => user.password === credentials.password && user.name === credentials.username)[0];
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
