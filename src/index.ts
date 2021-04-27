import 'dotenv/config'
import * as logger from 'loglevel'
import startServer from './start'
// ORM_START
import initDb from './init-db'
// ORM_END

const isTest = process.env.NODE_ENV === 'test'
const logLevel: logger.LogLevelDesc = isTest ? 'info' : 'debug'

logger.setLevel(logLevel)

// ORM_START
initDb()
// ORM_END
startServer()
