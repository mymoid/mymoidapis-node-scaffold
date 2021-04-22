// POSTGRES_START
// MONGO_START
import {createTypeormConn} from './utils/createTypeormConn'

async function initDb() {
  await createTypeormConn()
}

export default initDb
// POSTGRES_END
// MONGO_START
