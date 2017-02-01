var AWS = require('aws-sdk');

module.exports.dbFramework = function() {
    before('setup dynamodb verifier', function() {
        this.dynamo = new AWS.DynamoDB.DocumentClient();
        this.TABLE_NAME = "AlexaPlexUsers";
        var context = this;

        this.testdb = {
            queryUser: function(userid) {
                var getItemParams = {
                    TableName: context.TABLE_NAME,
                    Key: { "userid": userid}
                };
                var data = context.dynamo.get(getItemParams);//, function(err, data){
                    /*console.log("db.queryUser data: " + JSON.stringify(data));
                    return data;
                });*/
                console.log("db.queryUser data: " + JSON.stringify(data));
                return data;
            }
        };
    });
};