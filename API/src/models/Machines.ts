import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";
import User_id from '../models/User_idClass'

@Entity()
class Machine {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  description: string;

  @Column()
  supervisor: string;

  @Column()
  status: string;

  @Column()
  health: number;
}

export default Machine;