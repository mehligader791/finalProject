import * as AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

interface Item {
  id: string;
  name: string;
  age: number;
}

async function getItems(params: DocumentClient.ScanInput) {
  return await docClient.scan(params).promise();
}
