// MSW_START
import {setupServer} from 'msw/node'
import {handlers} from './handlers'

export const server = setupServer(...handlers)
// MSW_END
