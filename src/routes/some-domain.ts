import {Router, IRouter} from 'express'
import {action} from './some-controller'

function getSomeDomainRouter(): IRouter {
  const router = Router()
  router.use('/subdomain', action)
  return router
}

export default getSomeDomainRouter
