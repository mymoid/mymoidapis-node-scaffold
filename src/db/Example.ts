// COMMENT_START
// Orm entity template
// COMMENT_END
// ORM_START
import {getManager, Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('${projectName}')
class ${projectName} {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('boolean', {
    nullable: true,
  })
  fieldName: boolean
}

function create${ProjectName}Repository() {
  return getManager().getRepository('${projectName}')
}

export {${projectName}, create${ProjectName}Repository}
// ORM_END
