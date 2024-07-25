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
# dev | prod | qa
NODE_ENV=dev
APP_HOST=localhost
APP_PORT=3004
```

> 💡 See the [Docker](#docker) section to set up the environment variables for
> Postgres and PG Admin.

Install required dependencies:

```bash
npm install
```

## Running the server

After all dependencies are installed, just run the command:

```bash
npm run psql
npm run dev:server
```

## Endpoints

The following endpoints are exposed by Express:

## Swagger

TODO: Configure tsoa

## Docker

MongoDB is loaded as a docker container, sou you need to make sure to create a
`.env` file with the following environment variables:

```bash
POSTGRES_USER=appuser
POSTGRES_PASSWORD=symph0NY
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=pokemon

PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org
PGADMIN_DEFAULT_PASSWORD=admin
PGADMIN_PORT=5050
```

In order to run Postgres, you need to mount the docker container, and start the
`psql` service. To do that just run the command:

```bash
npm run psql
```

After that, let's make sure the container is running:

```bash
docker ps -a
```

You should have a result like this:

```bash
CONTAINER ID   IMAGE             COMMAND                  CREATED      STATUS        PORTS                    NAMES
369fec1a41d2   dpage/pgadmin4    "/entrypoint.sh"         1 hour ago   Up 2 minutes  0.0.0.0:5050->80/tcp     pgadmin_4
879b90b32d08   postgres:114.12   "docker-entrypoint.s…"   1 hour ago   Up 2 minutes  0.0.0.0:5432->5432/tcp   postgresdb_14
```

To open
[PG Admin](https://anasdidi.dev/articles/200713-docker-compose-postgres/), the
web-based Postgres admin interface, go to the browser and navigate to
`http://localhost:5050/`, using credentials in the env variables
`PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD`.

- Click on `Add New Server`
- Click on `Connection` tab, and put `postgresmon` as the Host name, which is
  the database service name in the `docker-compose.yml` file.
  - Alternatively, you can use the docker container public IP . Just execute:
    `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgresdb_14`
- Put the username and password specified in the env variables `POSTGRES_USER`
  and `POSTGRES_PASSWORD` respectively.

If you want to open the terminal to run commands on the container, just run the
following command for the specific container:

```bash
docker exec -it postgresdb_14 bash
root@postgresmon:/#
```

For example, we can get the list of databases by running:

```bash
# psql -h {HOST} -p {PORT} -U {USER} -l
psql -h localhost -p 5432 -U appuser -l
```

And we get the following results:

```bash
                               List of databases
   Name    |  Owner  | Encoding |  Collate   |   Ctype    |  Access privileges
-----------+---------+----------+------------+------------+---------------------
 pokemon   | appuser | UTF8     | en_US.utf8 | en_US.utf8 |
 postgres  | appuser | UTF8     | en_US.utf8 | en_US.utf8 |
 template0 | appuser | UTF8     | en_US.utf8 | en_US.utf8 | =c/appuser         +
           |         |          |            |            | appuser=CTc/appuser
 template1 | appuser | UTF8     | en_US.utf8 | en_US.utf8 | =c/appuser         +
           |         |          |            |            | appuser=CTc/appuser
```
