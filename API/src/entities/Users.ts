import {
  Entity,
  Column
} from "typeorm";
import DefaultClass from "./DefaultClass";

@Entity()
class User extends DefaultClass {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

}

export default User;