const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
region: "eu-central-1",
apiVersion: "2012-08-10"
});
const replaceAll = (str, find, replace) => {
return str.replace(new RegExp(find, "g"), replace);
};
exports.handler = (event, context, callback) => {
const id = replaceAll(event.title, " ", "-").toLowerCase();
const params = {
Item: {
id: {
S: id
},
title: {
S: event.title
},
watchHref: {
S: `http://www.pluralsight.com/Student1/${id}`
},
Student1Id: {
S: event.authorId
},
length: {
S: event.length
},
category: {
S: event.category
}
},
TableName: "courses"
};
dynamodb.putItem(params, (err, data) => {
if (err) {
console.log(err);
callback(err);
} else {
callback(null, {
Student1id: params.Item.id.S,
firtsName:params.Item.Student1FirstName.S,
lastName: params.Item.Student1LastName.S,
grade: params.Item.Student1Grade.N
});
}
});
};