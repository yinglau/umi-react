const spawn = require('cross-spawn');

// spawn('tsc --project tsconfig.json --noEmit')
const result = spawn.sync('tsc', ['--project', 'tsconfig.json', '--noEmit'], {
  // stdio: 'pipe',
});

const errors = result.output[1].toString();

if (errors) {
  console.error(errors);
  process.exit(1);
}
