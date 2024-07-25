# Pokemon Card Battle TCG

This is the repository base.

This fullstack application consist of:

1. Backend: Express + tsoa, Postgres ([README.md](https://github.com/jherax/pokemon-cards-game/tree/master/backend))
1. Frontend: React + styled-components

## husky

After cloning the repository
[pokemon-cards-game](https://github.com/jherax/pokemon-cards-game.git) you must
install the dependencies by running in the terminal:

```bash
npm install
```

Then run the following command to configure git-hooks

```bash
npm run prepare
```

See:
[conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint).

## standard-version

`standard-version` needs to have a starting point to append the CHANGELOG and
other versions to. Simply run:

```bash
npm run release -- --first-release
```

### Usage

For a new release, just run

```bash
npm run release
```

For more details, please visit the Github site
[standard-version](https://github.com/conventional-changelog/standard-version)
