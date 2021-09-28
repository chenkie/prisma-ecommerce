### `docker compose up` on first instantiation of Postgres DB

```bash
dopaminedriven@LAPTOP-2IH011V4:~/egghead/prisma-ecommerce/prisma$ docker compose up
[+] Running 2/2
 ⠿ Network prisma_default  Created                                                                                                                                                                                                       0.1s
 ⠿ Container prisma_db_1   Created                                                                                                                                                                                                       0.1s
Attaching to db_1
db_1  | The files belonging to this database system will be owned by user "postgres".
db_1  | This user must also own the server process.
db_1  |
db_1  | The database cluster will be initialized with locale "en_US.utf8".
db_1  | The default database encoding has accordingly been set to "UTF8".
db_1  | The default text search configuration will be set to "english".
db_1  |
db_1  | Data page checksums are disabled.
db_1  |
db_1  | fixing permissions on existing directory /var/lib/postgresql/data ... ok
db_1  | creating subdirectories ... ok
db_1  | selecting dynamic shared memory implementation ... posix
db_1  | selecting default max_connections ... 100
db_1  | selecting default shared_buffers ... 128MB
db_1  | selecting default time zone ... Etc/UTC
db_1  | creating configuration files ... ok
db_1  | running bootstrap script ... ok
db_1  | performing post-bootstrap initialization ... ok
db_1  | syncing data to disk ... ok
db_1  |
db_1  |
db_1  | Success. You can now start the database server using:
db_1  |
db_1  |     pg_ctl -D /var/lib/postgresql/data -l logfile start
db_1  |
db_1  | initdb: warning: enabling "trust" authentication for local connections
db_1  | You can change this by editing pg_hba.conf or using the option -A, or
db_1  | --auth-local and --auth-host, the next time you run initdb.
db_1  | waiting for server to start....2021-09-28 08:46:41.637 UTC [49] LOG:  starting PostgreSQL 13.4 (Debian 13.4-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
db_1  | 2021-09-28 08:46:41.643 UTC [49] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1  | 2021-09-28 08:46:41.664 UTC [50] LOG:  database system was shut down at 2021-09-28 08:46:41 UTC
db_1  | 2021-09-28 08:46:41.672 UTC [49] LOG:  database system is ready to accept connections
db_1  |  done
db_1  | server started
db_1  | CREATE DATABASE
db_1  |
db_1  |
db_1  | /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
db_1  |
db_1  | 2021-09-28 08:46:42.093 UTC [49] LOG:  received fast shutdown request
db_1  | waiting for server to shut down....2021-09-28 08:46:42.099 UTC [49] LOG:  aborting any active transactions
db_1  | 2021-09-28 08:46:42.100 UTC [49] LOG:  background worker "logical replication launcher" (PID 56) exited with exit code 1
db_1  | 2021-09-28 08:46:42.100 UTC [51] LOG:  shutting down
db_1  | 2021-09-28 08:46:42.147 UTC [49] LOG:  database system is shut down
db_1  |  done
db_1  | server stopped
db_1  |
db_1  | PostgreSQL init process complete; ready for start up.
db_1  |
db_1  | 2021-09-28 08:46:42.222 UTC [1] LOG:  starting PostgreSQL 13.4 (Debian 13.4-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
db_1  | 2021-09-28 08:46:42.222 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db_1  | 2021-09-28 08:46:42.222 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db_1  | 2021-09-28 08:46:42.234 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1  | 2021-09-28 08:46:42.255 UTC [77] LOG:  database system was shut down at 2021-09-28 08:46:42 UTC
db_1  | 2021-09-28 08:46:42.264 UTC [1] LOG:  database system is ready to accept connections


```

# Prisma Ecommerce

This repo shows an example of how to use Prisma in a TypeScript-based Node
project. It goes along with my course on [egghead.io](https://egghead.io),
"Build an API with Prisma an Express".

## Installation

Clone the repo and install the dependencies.

```bash
# with npm
npm i

# with yarn
yarn
```

## Run the API

This project uses **ts-node-dev** to watch for updates and make them immediately
available.

```bash
npm run dev
```

The API will be served at `http://localhost:3001`.
