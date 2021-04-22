// COMMENT_START
// Entity template
// COMMENT_END
// POSTGRES_START
// MONGO_START
import {getManager, Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('example')
class Example {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('boolean', {
    nullable: true,
  })
  fieldName: boolean
}

function createReportRepository() {
  return getManager().getRepository(Example)
}

export {Example, createReportRepository}
// POSTGRES_END
// MONGO_START
