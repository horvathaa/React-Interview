module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        reactStrictMode: true,
        swcMinify: true,
    };

    return nextConfig;
};

module.exports = {
    publicRuntimeConfig: {
        ENVIRONMENT: process.env.NODE_ENV ?? null,
        DEFAULT_SITE: process.env.DEFAULT_SITE ?? null,
    },
};
