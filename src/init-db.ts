// ORM_START
import {createTypeormConn} from './utils/createTypeormConn'

async function initDb() {
  await createTypeormConn()
}

export default initDb
// ORM_END
