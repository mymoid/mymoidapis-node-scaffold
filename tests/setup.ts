// ORM_START
// @ts-ignore
const dockerCompose = require('docker-compose')
// @ts-ignore
const path = require('path')

module.exports = async () => {
  try {
    await dockerCompose.upOne('postgres', {
      cwd: path.join(__dirname),
      log: true,
    })
    console.log('Setup docker compose postgres done')
  } catch (err) {
    console.log('something went wrong:', err.message)
  }
}
// ORM_END
