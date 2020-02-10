import {Router, IRouter} from 'express'
import logger from 'loglevel'
import {action} from './some-controller'

function getSomeDomainRouter(): IRouter {
  const router = Router()
  logger.warn('GET /subdomain')
  router.get('/subdomain', action)
  return router
}

export default getSomeDomainRouter
