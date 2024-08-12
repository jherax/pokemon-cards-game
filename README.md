# Pokemon Card Battle TCG

This is a Monorepo which consists of 2 projects:

1. **Backend**: Express + JWT + tsoa + Postgres (see [README.md](https://github.com/jherax/pokemon-cards-game/tree/master/backend))
1. **Frontend**: React + react-router-dom + [react-jss](https://cssinjs.org/react-jss/) (see [README.md](https://github.com/jherax/pokemon-cards-game/tree/master/frontend))

Each project has its own workspace, and its own environment settings (vscode, typescript, eslint, etc.)

You can see the deployed App here:

- [pokemon-cards-game-frontend.vercel.app](https://pokemon-cards-game-frontend.vercel.app/)

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

If you want to bump the major version (SEMVER), you can create a commit by
adding the suffix `!` to the commit type, for example:
`git commit -m "feat!: new breaking changes`, or simply run:

```bash
npm run release -- --release-as major
```

For more details, please visit the Github site
[standard-version](https://github.com/conventional-changelog/standard-version)
