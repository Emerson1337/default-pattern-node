import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column
} from "typeorm";

class Units_id {
  @Column()
  machine_id: string;
}

class Users_id {
  @Column()
  machine_id: string;
}

@Entity()
class Company {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column(type => Users_id)
  users: Users_id[];

  @Column(type => Units_id)
  units: Units_id[];
}

export default Company;