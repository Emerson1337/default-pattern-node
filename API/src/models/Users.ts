import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";

@Entity()
class User {

  @ObjectIdColumn()
  id: ObjectID | undefined;

  @Column()
  name: string | undefined;

  @Column()
  email: string | undefined;

  @Column()
  password: string | undefined;

}

export default User;