import {Router, IRouter} from 'express'
import logger from 'loglevel'
import getSomeDomainRouter from './some-domain'

function getRouter(): IRouter {
  const router = Router()
  logger.warn(`/domain-service-name`)
  router.use('/domain-service-name', getSomeDomainRouter())
  return router
}

export default getRouter
