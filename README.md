## Chat Admin Client

A single page app for [chat admin client](https://github.com/nawawishkid/chat-admin-server.git).

Made with [React](https://github.com/facebook/react.git) without [Redux](https://github.com/reduxjs/react-redux.git) (because I've never tried it yet.)

See [`package.json`](./package.json) for available `npm` run script commands.

No unit test yet, my bad ;(

### Deployment

1. Define environment variables in `.env` file. See `.env.example` for example.
2. Run `npm run build` to build the app to `./dist` directory.
3. If you use Docker, go to `./docker/nginx/default.conf` to configure NGINX configuration.
