<!-- markdownlint-disable MD033 -->

# Pokemon Card Battle TCG

This backend application consist of a REST API which exposes the 👉
[_endpoints_](#endpoints) documented by Swagger at `/docs` path. See the
[Swagger](#swagger) section for more details.

## Environment

This aplication is created using Node.js v20. It is recommended using
**[nvm](https://github.com/creationix/nvm)** (Node Version Manager) to manage
Node.js versions. Go to
[github.com/creationix/nvm](https://github.com/creationix/nvm) and check the
installation process for your OS.

Make sure to set the env variables. For local environment you can create a
`.env` file with the following environment variables:

```bash
APP_HOST=localhost
APP_PORT=3004
```

Install required dependencies:

```bash
npm install
```

## Running the server

After all dependencies are installed, just run the command:

```bash
npm run dev:server
```

## Endpoints

The following endpoints are exposed by Express:

## Swagger

TODO: Configure tsoa
