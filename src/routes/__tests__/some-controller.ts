import * as someDomainController from '../some-controller'
import {buildReq, buildRes, buildNext, username} from 'utils/generate'

test('respond with 200 when ...', async () => {
  const req = buildReq()
  const res = buildRes()
  const next = buildNext()
  // @ts-ignore
  await someDomainController.action(req, res, next)
  expect(res.status).toBeCalledWith(200)
  expect(res.status).toBeCalledTimes(1)
  expect(res.json).toBeCalledWith({
    message: `some message`,
  })
  expect(res.json).toBeCalledTimes(1)
})
