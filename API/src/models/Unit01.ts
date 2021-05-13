import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";

class User_id {
  @ObjectIdColumn()
  user_id: ObjectID;
}

class Machine_id {
  @ObjectIdColumn()
  machine_id: ObjectID;
}

@Entity()
class Unit01 {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column(type => User_id)
  supervisors: User_id[];

  @Column(type => Machine_id)
  machine: Machine_id[];
}

export default Unit01;