const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 44321;
const hostname = process.env.HOSTNAME || 'localhost';

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    // const port = process.env.PORT || 44321;
    createServer((req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        //useful for debug
        // console.log("api url!",
        // process.env.crosswalk_api_url,

        // process.env.NODE_ENV,
        // process.env.authority,
        // process.env.client_id,
        // process.env.client_secret,
        // process.env.Response_type,
        // process.env.NEXTAUTH_URL,
        // process.env.redirect_uri,
        // process.env.authorization_endpoint,
        // process.env.authorization_scope,
        // process.env.authorization_AllowedRedirectUris,
        // process.env.NEXTAUTH_SECRET,
        // process.env.crosswalk_api_url,

        // );
        console.log(`Ready on config url at:${port} ${process.env.PORT}`);
    });
});
