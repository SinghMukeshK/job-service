const apiProcessor = require('job-api').apiProcessor;

module.exports.handle = function (event, context, callback) {
    apiProcessor.process(event, context)
        .then((body) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(body)
            })
        }).catch(error => {
            logger.error(`Handler ${error}`);
            throw error;
        })
};
