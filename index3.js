const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
region: "eu-central-1",
apiVersion: "2012-08-10"
});
exports.handler = (event, context, callback) => {
const params = {
Item: {
Student1Id: {
S: event.Student1Id
},
Student1FirstName: {
S: event.Student1FirstName
},
Student1LastName: {
S: event.Student1LastName
},
Student1Grade: {
S: event.Student1Grade
}
},
TableName: "Student1"
};
dynamodb.putItem(params, (err, data) => {
if (err) {
console.log(err);
callback(err);
} else {
callback(null, {
id: params.Item.Student1Id.S,
firtsName:params.Item.Student1FirstName.S,
lastName: params.Item.Student1LastName.S,
grade: params.Item.Student1Grade.N
});
}
});
};