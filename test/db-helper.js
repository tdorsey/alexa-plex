var AWS = require('aws-sdk');
var Q = require('q');

module.exports.dbFramework = function() {
    before('setup dynamodb verifier', function() {

        this.TABLE_NAME = "AlexaPlexUsers";
        var context = this;

        this.testdb = {
            queryUser: function(userid) {
                    var dynamodbDoc = new AWS.DynamoDB.DocumentClient();
                    var deferred = Q.defer();
                
                    var getItemParams = {
                        TableName: context.TABLE_NAME,
                        Key: { "userid": userid }
                    };
                
                    dynamodbDoc.get(getItemParams, function(err, data) {
                        if (err) {
                            return deferred.reject(err);
                        }
                                                            
                        return deferred.fulfill(data.Item);                        
                    });
                    return deferred.promise;
            }
        };
    });
};