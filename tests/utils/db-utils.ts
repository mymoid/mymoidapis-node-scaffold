import {createConnection, getConnectionOptions, Connection} from 'typeorm'
import {createReportRepository} from '../../src/db/Example'
import {buildReportCollection} from 'utils/generate'

// https://github.com/typeorm/typeorm/blob/master/test/utils/test-utils.ts
async function createTestingConnections() {
  const connectionOptions = await getConnectionOptions('default')
  Object.assign(connectionOptions, {entities: ['src/db/*.ts']})
  return createConnection({...connectionOptions, name: 'default'})
}

export function resetDb(connection: Connection) {
  return Promise.resolve(connection.synchronize(true))
}

export function closeDb(connection: Connection) {
  return Promise.resolve(
    connection && connection.isConnected ? connection.close() : undefined,
  )
}

async function initDb() {
  // @ts-ignore
  return await createTestingConnections({
    schemaCreate: true,
  })
}

async function insertReportCollection()   {
  const reports = createReportRepository()
  let reportsCollection = buildReportCollection()
  await Promise.all([
    // @ts-ignore
    reports.save(reportsCollection.report[0].map(({id, ...rest}) => rest)),
  ])
}

export {initDb, insertReportCollection}
