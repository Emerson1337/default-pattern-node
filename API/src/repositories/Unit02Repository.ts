import { EntityRepository, Repository } from 'typeorm';

import Unit02 from '../models/Unit02';

@EntityRepository(Unit02)
class Unit02Repository extends Repository<Unit02>{
}

export default Unit02Repository;