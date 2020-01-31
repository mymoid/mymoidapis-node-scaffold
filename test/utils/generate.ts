import faker from 'faker'

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

function buildReq({user = buildUser(), body = {}, ...overrides} = {}) {
  const req = {user, body, params: {}, ...overrides}
  return req
}

function buildRes(overrides = {}) {
  const res = {
    json: jest.fn(() => res).mockName('json'),
    status: jest.fn(() => res).mockName('status'),
    ...overrides,
  }
  return res
}

function buildNext(impl?) {
  return jest.fn(impl).mockName('next')
}

export {buildReq, buildRes, buildNext, getUsername as username}
