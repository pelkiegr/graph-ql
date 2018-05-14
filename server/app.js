const express = require('express');
const graphqlHTPP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://dbuser:test123@ds019068.mlab.com:19068/gql-greg');
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

app.use('/graphql', graphqlHTPP({
    schema,
    graphiql: true,
}));

const port = 4000;
app.listen(port, () => console.log(`Listening for requests on port ${port}`));

