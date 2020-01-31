import {Router, IRouter} from 'express'
import getSomeDomainRouter from './some-domain'

function getRouter(): IRouter {
  const router = Router()
  router.use('/domain-service-name', getSomeDomainRouter())
  return router
}

export default getRouter
