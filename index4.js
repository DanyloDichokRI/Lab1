const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
    region: "eu-nor-1",
    apiVersion: "2012-08-10"
});

exports.handler = (event, context, callback) => {
    const params = {
        Key: {
            id: {
                S: event.Student1Id
            }
        },
        TableName: "Student1Id"
    };

    dynamodb.getItem(params, (err, data) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            if (!data.Item) {
                const error = new Error("Item not found");
                console.log(error);
                callback(error);
            } else {
                callback(null, {
                    id: data.Item.Student1Id.S,
                    firstName: data.Item.Student1FirstName.S,
                    lastName: data.Item.Student1LastName.S
                });
            }
        }
    });
};