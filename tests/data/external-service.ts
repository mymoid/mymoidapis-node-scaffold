// MSW_START
// @ts-ignore
import allSomeDomain from './external-service-data.json'

let externalService = [...allSomeDomain]

type someDomain = {
  id: string
  name: string
}

function create(someDomain: someDomain) {
  externalService.push(someDomain)
  return someDomain
}

function read(someDomainId: string) {
  return externalService.find(
    someDomain => someDomain.id === someDomainId,
  )
}

function reset() {
  externalService = [...allSomeDomain]
}

export {create, read, reset}
// MSW_END
