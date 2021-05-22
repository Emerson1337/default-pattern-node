import { EntityRepository, Repository } from 'typeorm';

import Unit01 from '../models/Unit01';

@EntityRepository(Unit01)
class Unit01Repository extends Repository<Unit01>{
}

export default Unit01Repository;