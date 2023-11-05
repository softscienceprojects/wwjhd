"use strict";
const graphql = require('graphql');
const express = require('express');
var { graphqlHTTP } = require("express-graphql")
const { GraphQLSchema } = graphql;
const { query } = require('./schemas/query');

const schema = new GraphQLSchema({
    query
});

const root = {
    hello: () => {
      return "Hello world!"
    },
  }

var app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
      })
);

app.listen(3000, ()=>
    console.log('GraphQL listening on 3000')
);