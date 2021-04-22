// COMMENT_START
// Orm entity template
// COMMENT_END
// ORM_START
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
// ORM_END
