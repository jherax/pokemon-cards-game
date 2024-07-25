const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const commands = [
  `cp .env docker/postgres/.env`,
  `cd docker/postgres`,
  `docker-compose up -d`,
];

exec(commands.join(' && '))
  .then(response => {
    const msg = response.stderr || response.stdout;
    console.info(['Docker compose up!', msg].join('\n'));
  })
  .catch(error => {
    console.info('ERROR -> ', error);
    process.exit(1);
  });
