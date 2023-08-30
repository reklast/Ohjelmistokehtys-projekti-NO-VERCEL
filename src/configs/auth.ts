import type { AuthOptions, User } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
    providers: [
      
        Credentials({
            credentials: {
                username: {label: 'username', type: 'username', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                if(!credentials?.username || !credentials.password) return null;      
                
                const currentUser = { username: 'admin', password: 'admin'};
                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPass} = currentUser;

                    return userWithoutPass as unknown as User;
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
    }
}
