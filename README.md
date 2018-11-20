## Chat Admin Client

> Warning: broken English detected!

A single page app for [chat admin server](https://github.com/nawawishkid/chat-admin-server.git).

Made with [React](https://github.com/facebook/react.git) without [Redux](https://github.com/reduxjs/react-redux.git) (because I've never tried it yet.)  
The UI is powered by [Ant Design](https://github.com/ant-design/ant-design). I know that there are many UI/UX things to be improved, but my intention for this repo is to just provide any user interface for my another project I've mentioned above which is a web service, no frontend.  

This app stores JWT in `localStorage` and I'm aware of the risks of doing that as I've read [this](https://dev.to/rdegges/please-stop-using-local-storage-1i04) from [dev.to](https://dev.to/) and [this](https://auth0.com/docs/security/store-tokens#single-page-applications) from [Auth0](https://auth0.com). I may try storing it in memory at runtime as suggested by Auth0.

See [`.env.example`](./.env.example) for available environment variables and also [`package.json`](./package.json) for available `npm` run script commands.

No unit test yet, my bad ;(

### Deployment

1. Define environment variables in `.env` file. See `.env.example` for example.
2. Run `npm run build` to build the app to `./dist` directory.
3. If you use Docker, go to `./docker/nginx/default.conf` to configure NGINX configuration.
