const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schemas/schema");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./connection");

const app = express();

app.use(cors());

app.use(
    '/graphiql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);

app.use(
    '/api',
    graphqlHTTP({
        schema: schema,
    }),
);

app.use(express.static(__dirname + '/build'));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 8085);

