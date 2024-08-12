import Head from 'next/head';
import React from 'react';

export const Header = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="icon" type="image/x-icon" href="/vercel.svg" />

            <title>React Interview</title>
        </Head>
    );
};
