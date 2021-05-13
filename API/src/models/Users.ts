import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";

@Entity()
class User {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

}

export default User;