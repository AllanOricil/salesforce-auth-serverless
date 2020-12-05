module.exports = {
    tables: [
        {
            TableName: `User`,
            KeySchema: [{AttributeName: 'email', KeyType: 'HASH'}],
            AttributeDefinitions: [{AttributeName: 'email', AttributeType: 'S'}, {AttributeName: 'name', AttributeType: 'S'}, {AttributeName: 'github', AttributeType: 'M'}],
            ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
        },
    ],
};