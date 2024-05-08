// getStudent.js
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        console.log('Event:', event); // Log the event object to see if it contains the expected data
        const studentId = event.pathParameters.studentId;
        const params = {
            TableName: 'Student1',
            Key: {
                'Student1Id': studentId
            }
        };
        console.log('Params:', params); // Log the params object to see if it's correctly constructed
        const data = await dynamoDB.get(params).promise();
        console.log('Data:', data); // Log the data received from DynamoDB
        return { statusCode: 200, body: JSON.stringify(data.Item) };
    } catch (error) {
        console.error('Error:', error); // Log any errors that occur
        return { statusCode: 500, body: JSON.stringify(error) };
    }
};