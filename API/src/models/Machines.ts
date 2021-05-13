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

  @Column(type => User_id)
  supervisor: User_id;

  @Column()
  status: {
    type: string,
    enum: ['Em operação', 'Em alerta', 'Parada'],
    default: 'Parada'
  }

  @Column()
  saude: number;
}

export default Machine;