let Dal = require('../dal/JobDal');

class JobService {
    async save(record) {
        return await new Dal().put(record);
    }

    async list(){
        return await new Dal().list();
    }
}

module.exports = JobService;