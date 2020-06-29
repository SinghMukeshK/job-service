let AWS = require('aws-sdk');
let dynamoClient = new AWS.DynamoDB.DocumentClient;

class JobDal {
    async put(record) {
        return await dynamoClient.put({
            TableName: '',
            Item: record
        }).promise();
    }
}

module.exports = JobDal;