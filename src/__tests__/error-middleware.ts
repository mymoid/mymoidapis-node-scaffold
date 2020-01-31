import {UnauthorizedError} from 'express-jwt'
import {buildRes, buildReq, buildNext} from 'utils/generate'
import errorMiddleware from '../error-middleware'

test('Respond with 401', () => {
  const code = 'fake_error'
  const message = 'Fake error message'
  const error = new UnauthorizedError(code, {
    message,
  })
  const req = buildReq()
  const res = buildRes()
  const next = buildNext()
  // @ts-ignore
  errorMiddleware(error, req, res, next)
  expect(next).not.toHaveBeenCalled()
  expect(res.status).toHaveBeenCalledWith(401)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({
    code,
    message,
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})

test('calls next if headerSent is true', () => {
  const error = new Error('Some error')
  const req = buildReq()
  const res = buildRes({headersSent: true})
  const next = buildNext()
  // @ts-ignore
  errorMiddleware(error, req, res, next)
  expect(next).toHaveBeenCalledWith(error)
  expect(res.json).not.toHaveBeenCalled()
  expect(res.status).not.toHaveBeenCalled()
})

test('respond with 500 and the error object', () => {
  const message = 'Some captured error'
  const error = new Error(message)
  const req = buildReq()
  const res = buildRes()
  const next = buildNext()
  // @ts-ignore
  errorMiddleware(error, req, res, next)
  expect(next).not.toHaveBeenCalled()
  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({
    message,
    stack: error.stack,
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})
