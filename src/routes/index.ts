import {Router, IRouter} from 'express'
import logger from 'loglevel'
import {create${ProjectName}} from './${projectName}-controller'

// COMMENT_START
// FIXME: an alternative to str replace?, maybe a solution like codegen.macro. a Templates directory and override???
// COMMENT_END

function getRouter(): IRouter {
  const router = Router()
  logger.warn(`/${projectName}`)
  router.post('/${projectName}', getSomeDomainRouter())
  return router
}

export default getRouter
