import { ObjectID, ObjectIdColumn } from "typeorm";

class User_id {
  @ObjectIdColumn()
  user_id: ObjectID;
}

export default User_id;