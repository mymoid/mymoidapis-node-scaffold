import express, {Request, Response, NextFunction, Router} from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import logger from 'loglevel'
import 'express-async-errors'
import errorMiddleware from './error-middleware'
import getRouter from './routes'
import AWSXRay from 'aws-xray-sdk'

function startServer({port = process.env.PORT} = {}) {
  const app: express.Application = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.use(passport.initialize())

  app.use(AWSXRay.express.openSegment('mymoidapis-service')) // TODO: from package.json name?
  const router = getRouter()
  app.use('/api', router)
  app.use(errorMiddleware)
  app.use(AWSXRay.express.closeSegment())

  let ready = true

  app.get('/healthCheck', function(req: Request, res: Response) {
    logger.info('healthCheck')
    if (ready) {
      res.json({healthCheck: ready})
    } else {
      res.status(500).send({healthCheck: false})
    }
  })

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      // @ts-ignore
      logger.info(`Listening on port ${server.address().port}`)
      const originalClose = server.close.bind(server)
      // @ts-ignore
      server.close = () => {
        return new Promise(resolveClose => {
          originalClose(resolveClose)
        })
      }
      resolve(server)
    })

    process.on('SIGTERM', () => {
      logger.info('SIGTERM')
      const TIME_TO_KILL = 10000
      ready = false
      setTimeout(() => {
        server.close(() => {
          logger.warn('SIGTERM exit')
          process.exit(0)
        })
      }, TIME_TO_KILL)
    })
  })
}

export default startServer
