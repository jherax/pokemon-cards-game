#!/bin/bash
set -e
# Execute the init SQL script using psql
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE USER $PG_APP_USER WITH PASSWORD '$PG_APP_PASS';
GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $PG_APP_USER;
-- Use database
\c "$POSTGRES_DB"
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pg_trgm;
-- Create schemas
CREATE SCHEMA main;
-- Create Tables
EOSQL
