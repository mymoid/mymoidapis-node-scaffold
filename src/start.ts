import express, {Request, Response, NextFunction, Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'loglevel'
import 'express-async-errors'
import errorMiddleware from './error-middleware'
import getRouter from './routes'

function startServer({port = process.env.PORT} = {}) {
  const app: express.Application = express()
  app.use(cors())
  app.use(bodyParser.json())

  const router = getRouter()
  app.use(errorMiddleware)
  let ready = true

  app.get('/healthCheck', function(req: Request, res: Response) {
    logger.warn('healthCheck')
    if (ready) {
      res.json({healthCheck: ready})
    } else {
      res.status(500).send({healthCheck: false})
    }
  })

  app.use('/api', router)

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      // @ts-ignore
      logger.warn(`Listening on port ${server.address().port}`)
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
      logger.warn('SIGTERM')
      const TIME_TO_KILL = 10000
      ready = false
      logger.warn('closing server')
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
