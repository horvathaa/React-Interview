import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { Header } from '../components/header/header';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
