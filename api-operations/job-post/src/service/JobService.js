let Dal = require('../dal/JobDal');

class JobService {
    async save(record) {
        return await new Dal().put(record);
    }
}

module.exports = JobService;