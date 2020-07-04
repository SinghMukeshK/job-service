
const Utils = require('../utils/Utils');
let JobTableBo = require('../model/JobTableBo');
let JobService = require('../service/JobService');

class JobApiProcessor {

    async process(event) {
        if (event && event.body) {
            let keyValues = [];
            let request = Utils.parseElement(event.body);
            for (let key in request) {
                keyValues.push({ [key]: request[key] });
            }
            let tableBo = new JobTableBo(keyValues);
            console.log(tableBo.toString());
            let service = await new JobService().save(tableBo.createRecord());
            console.log(service)
            return {
                statusCode: 200,
                body: {
                    message: 'Job created successfully'
                }
            };
        } else {
            let service = new JobService().list();
            console.log(service);
            return {
                statusCode: 200,
                body: {
                    jobs: service.Items
                }
            };
        }

    }
}
module.exports = new JobApiProcessor();