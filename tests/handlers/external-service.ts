// MSW_START
import {rest} from 'msw'
import * as someDomainDB from '../data/external-service'

const handlers = [
  rest.get(`http://host.fake/some-resource/1`, async (req, res, ctx) => {

    return res(
      ctx.json(await someDomainDB.read('1')),
    )
  }),
]

export {handlers}
// MSW_END
