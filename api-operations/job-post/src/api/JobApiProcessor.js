
class JobApiProcessor {
    async process(event) {
        return {
            statusCode: 200,
            body: {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            }
        };
    }
}
module.exports = new JobApiProcessor();