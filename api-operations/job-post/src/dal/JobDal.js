let AWS = require('aws-sdk');
let dynamoClient = new AWS.DynamoDB.DocumentClient;
let TABLE_NAME = process.env.JOBTABLENAME || 'jobs-dev'

class JobDal {
    async put(record) {
        return await dynamoClient.put({
            TableName: TABLE_NAME,
            Item: record
        }).promise();
    }

    async list() {
        return await dynamoClient.batchGet({
            RequestItems: {
                [TABLE_NAME]: {
                    Keys: [{ HashKey: 'id', NumberRangeKey: 1 }]
                }
            }
        }).promise()
    }
}

module.exports = JobDal;