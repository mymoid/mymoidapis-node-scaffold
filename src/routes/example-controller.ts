import {Request, Response, NextFunction} from 'express'
import logger from 'loglevel'
// MSW_START
import axios from 'axios'
// MSW_END

type ${projectName}Request = {
  some: string
}

// MSW_START
type ExternalServiceDomainResponse = {
  data: {
    id: string
  }[]
}
// MSW_END

async function create${ProjectName}(req: Request, res: Response): Promise<Response> {
  logger.info('/${projectName}')
  const {some}: ${projectName}Request = req.body

  logger.info(
      `/${projectName} params: some: ${some}`,
  )
  if (!some) {
    logger.info(`some is required`)
    return res.status(400).json({error: `some is required`})
  }

  // MSW_START
  // Validate and filter requested applicationsID (PaymentPoints)
  logger.info(
      `POST ${process.env.EXTERNAL_SERVICE_URL} paymentPointList ${paymentPointList}`,
  )
  const response = await axios.post<Promise<ExternalServiceDomainResponse>>(
      `${process.env.PAYMENT_POINTS_SERVICE_URL}/some`,
      {
        some_property: 'some_property_value',
      },
  )
  if (!response.data) {
    logger.info(`some data is not valid`)
    return res
        .status(422)
        .json({error: `payment_points invalid for ...`})
  }
  // MSW_END


  return res.status(200).json({message: `some message`})
}

export {create${ProjectName}}
