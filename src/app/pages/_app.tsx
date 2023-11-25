// _app.tsx
import { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import Login from '@/app/components/Login/Login';

function MyApp({ Component, pageProps }: AppProps) {
    const { data: session } = useSession();

    return (
        <SessionProvider session={session}>
            {session ? <Component {...pageProps} /> : <Login />}
        </SessionProvider>
    );
}

export default MyApp;
