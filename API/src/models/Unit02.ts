import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";
import User from "./Users";
import Machine from "./Machines";

@Entity()
class Unit02 {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column(type => User)
  supervisors: User[];

  @Column(type => Machine)
  machine: Machine[];
}

export default Unit02;