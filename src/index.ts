import logger, {LogLevelDesc} from 'loglevel'
import AWSXRay from 'aws-xray-sdk'
import startServer from './start'
import http from 'http'
import https from 'https'

const isTest = process.env.NODE_ENV !== 'test'
const logLevel: LogLevelDesc = isTest ? 'warn' : 'info'

logger.setLevel(logLevel)

if (!isTest) {
  AWSXRay.captureHTTPsGlobal(http, true)
  AWSXRay.captureHTTPsGlobal(https, true)
  AWSXRay.setLogger(logger)
  AWSXRay.setDaemonAddress('xray-service.default:2000')
  AWSXRay.config([AWSXRay.plugins.EC2Plugin])
}

startServer()
