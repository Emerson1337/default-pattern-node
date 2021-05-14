import { EntityRepository, Repository } from 'typeorm';

import Machine from '../models/Machines';

@EntityRepository(Machine)
class MachinesRepository extends Repository<Machine>{
}

export default MachinesRepository;