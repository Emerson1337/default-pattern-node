import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";

class Machine_id {
  @Column()
  machine_id: string;
}

@Entity()
class Unit02 {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column(type => Machine_id)
  machines: Machine_id[];
}

export default Unit02;