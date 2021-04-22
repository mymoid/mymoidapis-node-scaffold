// ORM_START
// @ts-ignore
const path = require('path')
// @ts-ignore
const dockerCompose = require('docker-compose')

module.exports = async () => {
  try {
    await dockerCompose.down({cwd: path.join(__dirname), log: true})
    console.log('Teardown docker compose postgres done')
  } catch (err) {
    console.log('something went wrong:', err.message)
  }
}
// ORM_END
