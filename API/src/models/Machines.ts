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
  status: {
    type: string,
    enum: ['Em operação', 'Em alerta', 'Parada'],
    default: 'Parada'
  }

  @Column()
  health: number;
}

export default Machine;