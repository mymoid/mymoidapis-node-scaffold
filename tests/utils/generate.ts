import * as faker from 'faker'

// @ts-ignore
const getPassword = (...args) => `!0_Oo${faker.internet.password(...args)}`
const getId = faker.random.uuid
const getUsername = faker.internet.userName

function buildUser({password = getPassword(), ...overrides} = {}) {
  return {
    id: getId(),
    username: getUsername(),
    ...overrides,
  }
}

type BuildReport = {
  id?: string
  success?: boolean
}

function buildReport(overrides: BuildReport) {
  return {
    id: getId(),
    success: faker.random.boolean,
    ...overrides,
  }
}

function buildReportCollection(overrides = []) {
  // @ts-ignore
  return {report: [[buildReport(), buildReport()], 2]}
}

function buildReq({user = buildUser(), body = {}, ...overrides} = {}) {
  const req = {user, body, params: {}, ...overrides}
  return req
}

function buildRes(overrides = {}) {
  // @ts-ignore
  const res = {
    json: jest.fn(() => res).mockName('json'),
    status: jest.fn(() => res).mockName('status'),
    ...overrides,
  }
  return res
}

// @ts-ignore
function buildNext(impl?) {
  return jest.fn(impl).mockName('next')
}

export {
  buildReport,
  buildReportCollection,
  buildReq,
  buildRes,
  buildNext,
  getUsername as username,
}
