// POSTGRES_START
// MONGO_START
import {getConnectionOptions, createConnection, Connection} from 'typeorm'
import logger from 'loglevel'

export const createTypeormConn = async () => {
  logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)
  const connectionOptions = await getConnectionOptions('default')
  const connection: Connection = await createConnection({
    ...connectionOptions,
    name: 'default',
  })
  await connection.runMigrations()
  return connection
}
// POSTGRES_END
// MONGO_START
