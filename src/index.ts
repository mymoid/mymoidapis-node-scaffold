import * as logger from 'loglevel'
import AWSXRay from 'aws-xray-sdk'
import startServer from './start'
import http from 'http'
import https from 'https'
// POSTGRES_START
// MONGO_START
import initDb from './init-db'
// POSTGRES_END
// MONGO_START

const isTest = process.env.NODE_ENV === 'test'
const isProduction = process.env.NODE_ENV === 'production'
const logLevel: logger.LogLevelDesc = isTest ? 'info' : 'debug'

logger.setLevel(logLevel)

if (isProduction) {
  AWSXRay.captureHTTPsGlobal(http, true)
  AWSXRay.captureHTTPsGlobal(https, true)
  AWSXRay.setLogger(logger)
  AWSXRay.setDaemonAddress('xray-service.default:2000')
  AWSXRay.config([AWSXRay.plugins.EC2Plugin])
}

startServer()
