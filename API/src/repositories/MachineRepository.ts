import { EntityRepository, Repository } from 'typeorm';

import Machines from '../models/Machines';

@EntityRepository(Machines)
class MachinesRepository extends Repository<Machines>{
}

export default MachinesRepository;