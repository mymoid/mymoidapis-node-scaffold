// ORM_START
import {getConnectionOptions, createConnection, Connection} from 'typeorm'
import logger from 'loglevel'

export const createTypeormConn = async () => {
  logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)
  const connectionOptions = await getConnectionOptions('default')
  const connection: Connection = await createConnection({
    ...connectionOptions,
// ORM_END
// MONGO_START
    useUnifiedTopology: true,
// MONGO_END
// ORM_START
    name: 'default',
  })
  await connection.runMigrations()
  return connection
}
// ORM_END
