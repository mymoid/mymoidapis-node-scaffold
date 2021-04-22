import 'dotenv/config'

// POSTGRES_START
process.env.TYPEORM_CONNECTION='postgres'
process.env.TYPEORM_PORT='5432'
process.env.TYPEORM_USERNAME='postgres'
// POSTGRES_END
// MONGO_START
process.env.TYPEORM_CONNECTION='mongodb'
process.env.TYPEORM_PORT='27017'
process.env.TYPEORM_USERNAME='mongodb'
// MONGO_END
process.env.TYPEORM_HOST='localhost'
process.env.TYPEORM_PASSWORD='changeme'
process.env.TYPEORM_DATABASE='example_db'
process.env.TYPEORM_SYNCHRONIZE='true'
process.env.TYPEORM_LOGGING='true'
process.env.TYPEORM_ENTITIES='dist/db/*.js'
process.env.TYPEORM_MIGRATIONS='dist/db/migration/*.js'
process.env.TYPEORM_MIGRATIONS_DIR='src/db/migration'

beforeEach(() => jest.spyOn(Date, 'now'))
afterEach(() => {
  jest.restoreAllMocks()
  if (jest.isMockFunction(setTimeout)) {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  }
})
