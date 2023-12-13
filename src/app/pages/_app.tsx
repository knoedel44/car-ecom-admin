// _app.tsx
import { AppProps } from 'next/app';
import { SessionProvider, getSession } from 'next-auth/react';
import Login from '@/app/components/Login/Login';
import DashboardContent from '@/app/components/Dashboard/overview/DashboardContent';

function App({ Component, pageProps, session }: AppProps & { session: any }) {
    // Check for a valid session during initial render
    if (!session) {
        return <Login />;
    }

    return (
        <SessionProvider session={session}>
            <DashboardContent {...pageProps} />
        </SessionProvider>
    );
}

// Fetch session during server-side rendering
export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}

export default App;
